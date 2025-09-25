// Church Registration & Attendance Web App - Complete Application
// This file contains all HTML templates and functionality

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzhLetjXheng6VTIRk0syChVzy01u6l-0",
  authDomain: "churchattendanceregistration.firebaseapp.com",
  databaseURL: "https://churchattendanceregistration-default-rtdb.firebaseio.com",
  projectId: "churchattendanceregistration",
  storageBucket: "churchattendanceregistration.firebasestorage.app",
  messagingSenderId: "146341806987",
  appId: "1:146341806987:web:2d6720feb68dfc633da58e",
  measurementId: "G-3ERE21YV2E",
};

class ChurchApp {
    constructor() {
        this.authManager = new AuthManager();
        this.database = new DatabaseManager();
        this.templates = {};
        this.init();
    }

    init() {
        this.loadTemplates();
        this.setupEventListeners();
        this.initializeAuth();
    }

    // Load all HTML templates
    loadTemplates() {
        this.templates = {
            // Landing Page
            index: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TFMJCCM CHURCH - Registration & Attendance</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <i class="fas fa-church text-2xl text-blue-600"></i>
                        <span class="ml-2 text-xl font-bold text-gray-900">TFMJCCM CHURCH</span>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#home" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#about" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#ministries" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Ministries</a>
                        <a href="#contact" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#" onclick="app.showLogin()" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                    <a href="#" onclick="app.showRegister()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">Register</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">Welcome to TFMJCCM CHURCH</h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100">Growing together in faith, love, and service</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" onclick="app.showRegister()" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Join Our Community</a>
                    <a href="#" onclick="app.showLogin()" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">Member Login</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Announcements Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest Announcements</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-red-100 p-2 rounded-full">
                            <i class="fas fa-exclamation text-red-600"></i>
                        </div>
                        <span class="ml-3 text-sm text-gray-500">December 15, 2024</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Christmas Service Schedule</h3>
                    <p class="text-gray-600">Join us for our special Christmas services on December 24th and 25th. Services will be held at 6:00 PM and 10:00 AM respectively.</p>
                </div>
                
                <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-green-100 p-2 rounded-full">
                            <i class="fas fa-users text-green-600"></i>
                        </div>
                        <span class="ml-3 text-sm text-gray-500">December 10, 2024</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">New Member Orientation</h3>
                    <p class="text-gray-600">Welcome our new members! Orientation session will be held this Sunday after the main service in the fellowship hall.</p>
                </div>
                
                <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full">
                            <i class="fas fa-heart text-blue-600"></i>
                        </div>
                        <span class="ml-3 text-sm text-gray-500">December 8, 2024</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Community Outreach Program</h3>
                    <p class="text-gray-600">We're organizing a community outreach program to help local families in need. Volunteers are welcome to join us this Saturday.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Church Management Features</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-users text-2xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Member Management</h3>
                    <p class="text-gray-600">Track and manage church members with detailed profiles and contact information.</p>
                </div>
                
                <div class="text-center">
                    <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-calendar-check text-2xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Attendance Tracking</h3>
                    <p class="text-gray-600">Monitor attendance patterns and generate reports for better church planning.</p>
                </div>
                
                <div class="text-center">
                    <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-bullhorn text-2xl text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Announcements</h3>
                    <p class="text-gray-600">Share important updates and events with the entire church community.</p>
                </div>
                
                <div class="text-center">
                    <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-chart-bar text-2xl text-orange-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Reports & Analytics</h3>
                    <p class="text-gray-600">Generate comprehensive reports to track church growth and engagement.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-church text-2xl text-blue-400"></i>
                        <span class="ml-2 text-xl font-bold">TFMJCCM CHURCH</span>
                    </div>
                    <p class="text-gray-400">Growing together in faith, love, and service to our community.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Ministries</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Events</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
                    <div class="space-y-2 text-gray-400">
                        <p><i class="fas fa-map-marker-alt mr-2"></i>123 Church Street, City, State 12345</p>
                        <p><i class="fas fa-phone mr-2"></i>(555) 123-4567</p>
                        <p><i class="fas fa-envelope mr-2"></i>info@gracechurch.com</p>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 TFMJCCM CHURCH. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,

            // Login Modal
            loginModal: `
<div id="loginModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden z-50">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Login to Your Account</h3>
                <button onclick="app.hideLogin()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="loginForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password">
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                        <label class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
                </div>
                <div class="flex items-center justify-end space-x-3">
                    <button type="button" onclick="app.hideLogin()" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button type="button" onclick="app.handleLoginClick()" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`,

            // Register Modal
            registerModal: `
<div id="registerModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden z-50">
    <div class="relative top-10 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div class="mt-3">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Join Our Church Community</h3>
                <button onclick="app.hideRegister()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="registerForm" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" name="firstName" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your first name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" name="lastName" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your last name">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Ministry</label>
                        <select name="ministry" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Ministry</option>
                            <option value="worship">Worship</option>
                            <option value="youth">Youth</option>
                            <option value="children">Children</option>
                            <option value="outreach">Outreach</option>
                            <option value="administration">Administration</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Role</label>
                        <select name="role" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Role</option>
                            <option value="member">Member</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="leader">Leader</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" name="confirmPassword" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Confirm your password">
                </div>
                <div class="flex items-center">
                    <input type="checkbox" required class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                    <label class="ml-2 block text-sm text-gray-900">
                        I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                    </label>
                </div>
                <div class="flex items-center justify-end space-x-3">
                    <button type="button" onclick="app.hideRegister()" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button type="button" onclick="app.handleRegisterClick()" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`
        };
    }

    // Authentication Manager
    initializeAuth() {
        this.authManager = new AuthManager();
    }

    // Show/Hide Modals
    showLogin() {
        document.getElementById('loginModal').classList.remove('hidden');
    }

    hideLogin() {
        document.getElementById('loginModal').classList.add('hidden');
    }

    showRegister() {
        document.getElementById('registerModal').classList.remove('hidden');
    }

    hideRegister() {
        document.getElementById('registerModal').classList.add('hidden');
    }

    // Setup Event Listeners
    setupEventListeners() {
        // Initialize immediately if DOM is already loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }

        // Login form handler
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'loginForm') {
                e.preventDefault();
                this.handleLogin(e);
            } else if (e.target.id === 'registerForm') {
                e.preventDefault();
                this.handleRegister(e);
            }
        });
    }

    // Handle Login Click
    async handleLoginClick() {
        try {
            console.log('Login button clicked');
            const form = document.getElementById('loginForm');
            if (!form) {
                console.error('Login form not found');
                this.showNotification('Login form not found. Please refresh the page.', 'error');
                return;
            }
            
            const formData = new FormData(form);
            const email = formData.get('email');
            const password = formData.get('password');
            
            console.log('Login attempt:', { email, password: '***' });
            
            if (!email || !password) {
                this.showNotification('Please enter both email and password.', 'error');
                return;
            }
            
            await this.handleLogin({ target: form });
        } catch (error) {
            console.error('Login click error:', error);
            this.showNotification('Login failed. Please try again.', 'error');
        }
    }

    // Handle Login
    async handleLogin(event) {
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        
        try {
            const result = await this.authManager.login(email, password);
            
            if (result.success) {
                this.showNotification('Login successful! Redirecting...', 'success');
                this.hideLogin();
                this.redirectToDashboard();
            } else {
                this.showNotification(result.message || 'Invalid credentials', 'error');
            }
        } catch (error) {
            this.showNotification('Login failed. Please try again.', 'error');
            console.error('Login error:', error);
        }
    }

    // Handle Register Click
    async handleRegisterClick() {
        const form = document.getElementById('registerForm');
        const formData = new FormData(form);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            ministry: formData.get('ministry'),
            role: formData.get('role'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        };

        await this.handleRegister({ target: form });
    }

    // Handle Registration
    async handleRegister(event) {
        const formData = new FormData(event.target);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            ministry: formData.get('ministry'),
            role: formData.get('role'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        };

        // Basic validation
        if (userData.password !== userData.confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        try {
            const result = await this.authManager.register(userData);
            
            if (result.success) {
                this.showNotification(result.message, 'success');
                this.hideRegister();
            } else {
                this.showNotification(result.message, 'error');
            }
        } catch (error) {
            this.showNotification('Registration failed. Please try again.', 'error');
            console.error('Registration error:', error);
        }
    }

    // Redirect to appropriate dashboard
    redirectToDashboard() {
        const user = this.authManager.getCurrentUser();
        if (!user) return;

        let dashboardUrl = '';
        switch (user.role) {
            case 'super_admin':
                dashboardUrl = 'super-admin-dashboard.html';
                break;
            case 'admin':
                dashboardUrl = 'admin-dashboard.html';
                break;
            case 'member':
                dashboardUrl = 'member-dashboard.html';
                break;
            default:
                dashboardUrl = 'index.html';
        }

        window.location.href = dashboardUrl;
    }

    // Initialize App
    initializeApp() {
        // Check for existing session
        const user = this.authManager.getCurrentUser();
        if (user) {
            this.redirectToDashboard();
        }

        // Add modals to page
        this.addModalsToPage();
    }

    // Add modals to page
    addModalsToPage() {
        const body = document.body;
        body.insertAdjacentHTML('beforeend', this.templates.loginModal);
        body.insertAdjacentHTML('beforeend', this.templates.registerModal);
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Database Manager Class
class DatabaseManager {
    constructor() {
        this.db = null;
        this.auth = null;
        this.init();
    }

    async init() {
        try {
            // Initialize Firebase
            if (typeof firebase !== 'undefined') {
                firebase.initializeApp(firebaseConfig);
                this.db = firebase.database();
                this.auth = firebase.auth();
            } else {
                console.warn('Firebase SDK not loaded. Using local storage fallback.');
            }
        } catch (error) {
            console.error('Firebase initialization error:', error);
        }
    }

    // User Management
    async createUser(userData) {
        try {
            if (this.db) {
                const userRef = this.db.ref('users').push();
                await userRef.set({
                    ...userData,
                    id: userRef.key,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    updatedAt: firebase.database.ServerValue.TIMESTAMP
                });
                return { success: true, id: userRef.key };
            } else {
                // Fallback to localStorage
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const newUser = { ...userData, id: Date.now() };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                return { success: true, id: newUser.id };
            }
        } catch (error) {
            console.error('Error creating user:', error);
            return { success: false, error: error.message };
        }
    }

    async getUserByEmail(email) {
        try {
            if (this.db) {
                const snapshot = await this.db.ref('users').orderByChild('email').equalTo(email).once('value');
                const users = snapshot.val();
                if (users) {
                    const userId = Object.keys(users)[0];
                    return { success: true, user: { id: userId, ...users[userId] } };
                }
                return { success: false, message: 'User not found' };
            } else {
                // Fallback to localStorage
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email);
                if (user) {
                    return { success: true, user };
                }
                return { success: false, message: 'User not found' };
            }
        } catch (error) {
            console.error('Error getting user:', error);
            return { success: false, error: error.message };
        }
    }

    async updateUser(userId, userData) {
        try {
            if (this.db) {
                await this.db.ref(`users/${userId}`).update({
                    ...userData,
                    updatedAt: firebase.database.ServerValue.TIMESTAMP
                });
                return { success: true };
            } else {
                // Fallback to localStorage
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const userIndex = users.findIndex(u => u.id === userId);
                if (userIndex !== -1) {
                    users[userIndex] = { ...users[userIndex], ...userData };
                    localStorage.setItem('users', JSON.stringify(users));
                    return { success: true };
                }
                return { success: false, message: 'User not found' };
            }
        } catch (error) {
            console.error('Error updating user:', error);
            return { success: false, error: error.message };
        }
    }

    // Attendance Management
    async markAttendance(userId, attendanceData) {
        try {
            if (this.db) {
                const attendanceRef = this.db.ref('attendance').push();
                await attendanceRef.set({
                    userId,
                    ...attendanceData,
                    id: attendanceRef.key,
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                });
                return { success: true, id: attendanceRef.key };
            } else {
                // Fallback to localStorage
                const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
                const newAttendance = { id: Date.now(), userId, ...attendanceData, timestamp: new Date().toISOString() };
                attendance.push(newAttendance);
                localStorage.setItem('attendance', JSON.stringify(attendance));
                return { success: true, id: newAttendance.id };
            }
        } catch (error) {
            console.error('Error marking attendance:', error);
            return { success: false, error: error.message };
        }
    }

    async getAttendanceByUser(userId) {
        try {
            if (this.db) {
                const snapshot = await this.db.ref('attendance').orderByChild('userId').equalTo(userId).once('value');
                const attendance = snapshot.val();
                return { success: true, data: attendance ? Object.values(attendance) : [] };
            } else {
                // Fallback to localStorage
                const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
                const userAttendance = attendance.filter(a => a.userId === userId);
                return { success: true, data: userAttendance };
            }
        } catch (error) {
            console.error('Error getting attendance:', error);
            return { success: false, error: error.message };
        }
    }

    // Announcements Management
    async createAnnouncement(announcementData) {
        try {
            if (this.db) {
                const announcementRef = this.db.ref('announcements').push();
                await announcementRef.set({
                    ...announcementData,
                    id: announcementRef.key,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                });
                return { success: true, id: announcementRef.key };
            } else {
                // Fallback to localStorage
                const announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
                const newAnnouncement = { id: Date.now(), ...announcementData, createdAt: new Date().toISOString() };
                announcements.push(newAnnouncement);
                localStorage.setItem('announcements', JSON.stringify(announcements));
                return { success: true, id: newAnnouncement.id };
            }
        } catch (error) {
            console.error('Error creating announcement:', error);
            return { success: false, error: error.message };
        }
    }

    async getAnnouncements() {
        try {
            if (this.db) {
                const snapshot = await this.db.ref('announcements').orderByChild('createdAt').once('value');
                const announcements = snapshot.val();
                return { success: true, data: announcements ? Object.values(announcements).reverse() : [] };
            } else {
                // Fallback to localStorage
                const announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
                return { success: true, data: announcements.reverse() };
            }
        } catch (error) {
            console.error('Error getting announcements:', error);
            return { success: false, error: error.message };
        }
    }
}

// Authentication Manager Class
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.database = new DatabaseManager();
        this.roles = {
            SUPER_ADMIN: 'super_admin',
            ADMIN: 'admin',
            MEMBER: 'member'
        };
        this.init();
    }

    init() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    async login(email, password) {
        try {
            console.log('AuthManager.login called with:', { email, password: '***' });
            
            // First try Firebase Auth if available
            if (this.database.auth) {
                try {
                    console.log('Trying Firebase authentication...');
                    const userCredential = await this.database.auth.signInWithEmailAndPassword(email, password);
                    const user = userCredential.user;
                    
                    // Get user data from database
                    const userResult = await this.database.getUserByEmail(email);
                    if (userResult.success) {
                        this.currentUser = userResult.user;
                        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                        console.log('Firebase login successful:', this.currentUser);
                        return { success: true, user: this.currentUser };
                    }
                } catch (firebaseError) {
                    console.log('Firebase auth failed, trying local users:', firebaseError);
                }
            } else {
                console.log('Firebase auth not available, using local users');
            }

            // Fallback to predefined users
            console.log('Trying local authentication...');
            const users = this.getPredefinedUsers();
            console.log('Available users:', users.map(u => ({ email: u.email, role: u.role })));
            
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                console.log('Local login successful:', user);
                this.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                return { success: true, user: user };
            } else {
                console.log('No matching user found');
                return { success: false, message: 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Login failed. Please try again.' };
        }
    }

    async register(userData) {
        try {
            // Create user in database
            const result = await this.database.createUser({
                ...userData,
                role: this.roles.MEMBER, // Default role for new registrations
                status: 'active',
                joinDate: new Date().toISOString().split('T')[0]
            });

            if (result.success) {
                // Also create Firebase Auth user if available
                if (this.database.auth) {
                    try {
                        await this.database.auth.createUserWithEmailAndPassword(userData.email, userData.password);
                    } catch (authError) {
                        console.log('Firebase auth user creation failed:', authError);
                    }
                }
                return { success: true, message: 'Registration successful!' };
            } else {
                return { success: false, message: result.error || 'Registration failed' };
            }
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Registration failed. Please try again.' };
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        
        // Firebase logout if available
        if (this.database.auth) {
            this.database.auth.signOut();
        }
        
        window.location.href = 'index.html';
    }

    getCurrentUser() {
        return this.currentUser;
    }

    hasRole(role) {
        return this.currentUser && this.currentUser.role === role;
    }

    getPredefinedUsers() {
        return [
            {
                id: 1,
                name: 'King Influence',
                email: 'kingeninfluence@gmail.com',
                password: 'admin123',
                role: this.roles.SUPER_ADMIN,
                ministry: 'Administration',
                status: 'active',
                joinDate: '2024-01-01',
                firstName: 'King',
                lastName: 'Influence',
                phone: '+1 (555) 123-4567',
                address: '123 Church Street, City, State 12345',
                emergencyContact: 'Jane Influence',
                emergencyPhone: '+1 (555) 987-6543',
                dateOfBirth: '1990-01-15',
                maritalStatus: 'Married'
            }
        ];
    }
}

// Initialize the app
const app = new ChurchApp();

// Make app globally available
window.app = app;

// Debug: Check if app is available
console.log('App initialized:', app);
console.log('App methods available:', Object.getOwnPropertyNames(Object.getPrototypeOf(app)));

// Test function for debugging
window.testLogin = function() {
    console.log('Testing login...');
    if (window.app && window.app.handleLoginClick) {
        console.log('App and handleLoginClick method found');
    } else {
        console.error('App or handleLoginClick method not found');
    }
};