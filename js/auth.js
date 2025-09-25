// Authentication and Role Management System

class AuthManager {
    constructor() {
        this.currentUser = null;
        this.roles = {
            SUPER_ADMIN: 'super_admin',
            ADMIN: 'admin',
            MEMBER: 'member'
        };
        this.init();
    }

    init() {
        // Check for existing session
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.redirectBasedOnRole();
        }
    }

    // Login function
    login(email, password) {
        // Simulate authentication with predefined users
        const users = this.getPredefinedUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.redirectBasedOnRole();
            return { success: true, user: user };
        } else {
            return { success: false, message: 'Invalid credentials' };
        }
    }

    // Logout function
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user has specific role
    hasRole(role) {
        return this.currentUser && this.currentUser.role === role;
    }

    // Check if user has permission
    hasPermission(permission) {
        if (!this.currentUser) return false;
        
        const permissions = {
            [this.roles.SUPER_ADMIN]: [
                'manage_users', 'manage_system', 'view_all_data', 'export_data',
                'manage_announcements', 'manage_members', 'view_reports'
            ],
            [this.roles.ADMIN]: [
                'manage_members', 'view_attendance', 'manage_announcements', 'view_reports'
            ],
            [this.roles.MEMBER]: [
                'view_own_profile', 'mark_attendance', 'view_announcements'
            ]
        };
        
        return permissions[this.currentUser.role]?.includes(permission) || false;
    }

    // Redirect based on user role
    redirectBasedOnRole() {
        if (!this.currentUser) return;
        
        const role = this.currentUser.role;
        let redirectUrl = '';
        
        switch (role) {
            case this.roles.SUPER_ADMIN:
                redirectUrl = 'super-admin-dashboard.html';
                break;
            case this.roles.ADMIN:
                redirectUrl = 'admin-dashboard.html';
                break;
            case this.roles.MEMBER:
                redirectUrl = 'member-dashboard.html';
                break;
            default:
                redirectUrl = 'index.html';
        }
        
        // Only redirect if not already on the correct page
        if (!window.location.pathname.includes(redirectUrl)) {
            window.location.href = redirectUrl;
        }
    }

    // Get predefined users for demo
    getPredefinedUsers() {
        return [
            {
                id: 1,
                name: 'John Smith',
                email: 'superadmin@gracechurch.com',
                password: 'admin123',
                role: this.roles.SUPER_ADMIN,
                ministry: 'Administration',
                status: 'active',
                joinDate: '2020-01-15'
            },
            {
                id: 2,
                name: 'Sarah Johnson',
                email: 'admin@gracechurch.com',
                password: 'admin123',
                role: this.roles.ADMIN,
                ministry: 'Youth',
                status: 'active',
                joinDate: '2021-03-20'
            },
            {
                id: 3,
                name: 'Michael Chen',
                email: 'member@gracechurch.com',
                password: 'member123',
                role: this.roles.MEMBER,
                ministry: 'Worship',
                status: 'active',
                joinDate: '2022-06-10'
            },
            {
                id: 4,
                name: 'Emily Rodriguez',
                email: 'emily@gracechurch.com',
                password: 'member123',
                role: this.roles.MEMBER,
                ministry: 'Outreach',
                status: 'active',
                joinDate: '2023-01-05'
            }
        ];
    }

    // Register new user (Super Admin only)
    registerUser(userData) {
        if (!this.hasPermission('manage_users')) {
            return { success: false, message: 'Insufficient permissions' };
        }
        
        // Simulate user registration
        const newUser = {
            id: Date.now(),
            ...userData,
            status: 'active',
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        return { success: true, user: newUser };
    }

    // Update user role (Super Admin only)
    updateUserRole(userId, newRole) {
        if (!this.hasPermission('manage_users')) {
            return { success: false, message: 'Insufficient permissions' };
        }
        
        // Simulate role update
        return { success: true, message: 'User role updated successfully' };
    }

    // Get all users (Super Admin and Admin only)
    getAllUsers() {
        if (!this.hasPermission('manage_members')) {
            return [];
        }
        
        return this.getPredefinedUsers();
    }
}

// Initialize global auth manager
window.authManager = new AuthManager();

// Role-based navigation helper
function getNavigationForRole(role) {
    const navigation = {
        [window.authManager.roles.SUPER_ADMIN]: [
            { name: 'Dashboard', url: 'super-admin-dashboard.html', icon: 'fas fa-tachometer-alt' },
            { name: 'Users', url: 'user-management.html', icon: 'fas fa-users-cog' },
            { name: 'Members', url: 'members.html', icon: 'fas fa-users' },
            { name: 'Attendance', url: 'attendance.html', icon: 'fas fa-calendar-check' },
            { name: 'Announcements', url: 'announcements.html', icon: 'fas fa-bullhorn' },
            { name: 'Reports', url: 'reports.html', icon: 'fas fa-chart-bar' },
            { name: 'Settings', url: 'system-settings.html', icon: 'fas fa-cog' }
        ],
        [window.authManager.roles.ADMIN]: [
            { name: 'Dashboard', url: 'admin-dashboard.html', icon: 'fas fa-tachometer-alt' },
            { name: 'Members', url: 'members.html', icon: 'fas fa-users' },
            { name: 'Attendance', url: 'attendance.html', icon: 'fas fa-calendar-check' },
            { name: 'Announcements', url: 'announcements.html', icon: 'fas fa-bullhorn' },
            { name: 'Reports', url: 'reports.html', icon: 'fas fa-chart-bar' }
        ],
        [window.authManager.roles.MEMBER]: [
            { name: 'Dashboard', url: 'member-dashboard.html', icon: 'fas fa-tachometer-alt' },
            { name: 'My Profile', url: 'my-profile.html', icon: 'fas fa-user' },
            { name: 'Attendance', url: 'my-attendance.html', icon: 'fas fa-calendar-check' },
            { name: 'Announcements', url: 'announcements.html', icon: 'fas fa-bullhorn' }
        ]
    };
    
    return navigation[role] || [];
}

// Check if user can access page
function canAccessPage(pageName) {
    const user = window.authManager.getCurrentUser();
    if (!user) return false;
    
    const pagePermissions = {
        'super-admin-dashboard.html': ['super_admin'],
        'admin-dashboard.html': ['super_admin', 'admin'],
        'member-dashboard.html': ['super_admin', 'admin', 'member'],
        'user-management.html': ['super_admin'],
        'system-settings.html': ['super_admin'],
        'members.html': ['super_admin', 'admin'],
        'attendance.html': ['super_admin', 'admin', 'member'],
        'announcements.html': ['super_admin', 'admin', 'member'],
        'reports.html': ['super_admin', 'admin'],
        'my-profile.html': ['super_admin', 'admin', 'member'],
        'my-attendance.html': ['super_admin', 'admin', 'member']
    };
    
    const allowedRoles = pagePermissions[pageName];
    return allowedRoles && allowedRoles.includes(user.role);
}
