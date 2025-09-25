# Church Registration & Attendance Web App

A comprehensive web application for church management with role-based access control, featuring Super Admin, Admin, and Member dashboards with modern UI design using Tailwind CSS.

## 🎯 Features

### 📱 Pages Included
- **Landing Page** (`index.html`) - Hero section with announcements and features
- **Login Page** (`login.html`) - Role-based authentication system
- **Registration Page** (`register.html`) - Comprehensive registration form

#### 🔐 Role-Based Dashboards
- **Super Admin Dashboard** (`super-admin-dashboard.html`) - Full system control and user management
- **Admin Dashboard** (`admin-dashboard.html`) - Member and attendance management
- **Member Dashboard** (`member-dashboard.html`) - Personal dashboard with limited access

#### 📊 Management Pages
- **User Management** (`user-management.html`) - Super Admin only - Manage all users and roles
- **Attendance Page** (`attendance.html`) - Member attendance tracking table
- **Announcements Page** (`announcements.html`) - Card-based announcement system
- **Members Page** (`members.html`) - Member management with role badges
- **Reports Page** (`reports.html`) - Export functionality and data visualization

#### 👤 Member-Specific Pages
- **My Profile** (`my-profile.html`) - Personal information and church details
- **My Attendance** (`my-attendance.html`) - Personal attendance history and statistics

### 🎨 Design Features
- **Modern Aesthetic**: Clean, minimalist design with professional styling
- **Responsive Layout**: Mobile-first design that works on all devices
- **Color Palette**: Deep blue primary with complementary colors
- **Typography**: Inter font family for clean, readable text
- **Interactive Elements**: Hover effects, smooth transitions, and animations

### 🛠️ Technical Stack
- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Interactive functionality and form handling
- **Authentication System**: Role-based access control with session management
- **Font Awesome**: Icon library for visual elements
- **Chart.js**: Data visualization for dashboard charts

### 🔐 Authentication & Roles

#### User Roles
- **Super Admin**: Full system access, user management, system settings
- **Admin**: Member management, attendance tracking, announcements, reports
- **Member**: Personal profile, attendance history, announcements

#### Authentication Features
- Role-based login system
- Session management with localStorage
- Automatic role-based redirects
- Permission-based page access
- Secure logout functionality

#### Demo Credentials
```
Super Admin:
Email: superadmin@gracechurch.com
Password: admin123

Admin:
Email: admin@gracechurch.com
Password: admin123

Member:
Email: member@gracechurch.com
Password: member123
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs as static files

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Use the demo credentials above to test different user roles
4. Navigate through the different dashboards based on your role

### File Structure
```
REGISTRATION_AND_ATTENDANCE/
├── index.html                      # Landing page
├── login.html                      # Login form
├── register.html                   # Registration form
├── super-admin-dashboard.html      # Super Admin dashboard
├── admin-dashboard.html            # Admin dashboard
├── member-dashboard.html           # Member dashboard
├── user-management.html           # User management (Super Admin only)
├── my-profile.html                # Member profile page
├── my-attendance.html             # Member attendance page
├── attendance.html                # Attendance tracking
├── announcements.html             # Announcements management
├── members.html                   # Member management
├── reports.html                   # Reports and exports
├── js/
│   ├── auth.js                   # Authentication system
│   └── main.js                   # JavaScript functionality
└── README.md                     # This file
```

## 📋 Key Features by Role

### 🔴 Super Admin Features
- **System Overview**: Complete system health and statistics
- **User Management**: Create, edit, and manage all users and roles
- **System Settings**: Configure church settings and preferences
- **Full Access**: All Admin and Member features
- **Advanced Reports**: Comprehensive system analytics

### 🟡 Admin Features
- **Member Management**: Add, edit, and manage church members
- **Attendance Tracking**: Mark and monitor member attendance
- **Announcements**: Create and manage church announcements
- **Reports**: Generate attendance and member reports
- **Dashboard**: Overview of church statistics and trends

### 🟢 Member Features
- **Personal Dashboard**: Individual statistics and upcoming events
- **My Profile**: View and edit personal information
- **My Attendance**: Personal attendance history and statistics
- **Announcements**: Read church announcements
- **Limited Access**: Cannot access admin functions

### Attendance Management
- Member attendance table with status indicators
- Present/Absent toggle buttons
- Date selection and filtering
- Export functionality
- Pagination for large datasets

### Announcements
- Card-based announcement layout
- Category filtering and search
- Create new announcement modal
- Edit/delete functionality
- Responsive grid layout

### Member Management
- Comprehensive member table
- Role-based badges (Super Admin, Admin, Member)
- Ministry categorization
- Search and filter functionality
- Add/edit member modals
- Export capabilities

### Reports
- Multiple export options (Excel format)
- Date range filtering
- Sample data visualization
- Export summary statistics
- Quick export buttons

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale (#F9FAFB to #111827)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling from 12px to 48px

### Components
- **Cards**: Rounded corners, soft shadows
- **Buttons**: Multiple variants with hover states
- **Forms**: Clean inputs with focus states
- **Tables**: Responsive with hover effects
- **Modals**: Centered overlays with backdrop

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible sidebar navigation
- Touch-friendly buttons and inputs
- Optimized table layouts
- Stacked card layouts

## 🔧 JavaScript Functionality

### Core Features
- Form validation and submission
- Modal open/close functionality
- Attendance marking simulation
- Search and filter operations
- Export button interactions
- Mobile sidebar toggle

### Interactive Elements
- Hover effects and transitions
- Loading states for buttons
- Notification system
- Keyboard shortcuts (Ctrl+K for search, Escape for modals)
- Tooltip system

## 🎯 Future Enhancements

### Backend Integration
- Database connectivity
- User authentication
- Real-time data updates
- File upload capabilities

### Advanced Features
- Email notifications
- Calendar integration
- Advanced reporting
- Multi-language support
- Role-based permissions

## 📄 License

This is a static prototype for demonstration purposes. All design elements and code are created for this project.

## 🤝 Contributing

This is a prototype project. For production use, consider:
- Adding backend functionality
- Implementing proper authentication
- Adding database integration
- Enhancing security measures
- Adding comprehensive testing

---

**Note**: This is a static prototype designed to showcase the UI/UX and basic functionality. For production use, backend development and database integration would be required.
