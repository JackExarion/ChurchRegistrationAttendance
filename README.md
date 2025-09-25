# TFMJCCM CHURCH - Registration & Attendance Web App

A comprehensive web application for church management with Firebase database integration, role-based access control, and modern UI design using Tailwind CSS.

## 🚀 Features

- **Role-based Authentication**: Super Admin, Admin, and Member roles
- **Firebase Integration**: Real-time database synchronization
- **Attendance Tracking**: Mark and monitor member attendance
- **User Management**: Complete user CRUD operations
- **Announcements**: Dynamic announcement system
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Database**: Firebase Realtime Database
- **Authentication**: Firebase Auth
- **Icons**: Font Awesome
- **Charts**: Chart.js

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/church-attendance-app.git
cd church-attendance-app
```

2. Open `index.html` in your web browser

3. Use your super admin credentials:
```
Super Admin: kingeninfluence@gmail.com / admin123
```

## 🔥 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Realtime Database
3. Configure authentication (Email/Password)
4. Update the `firebaseConfig` in `app.js` with your project credentials

## 📁 Project Structure

```
church-attendance-app/
├── index.html                      # Main landing page
├── app.js                         # Complete application with Firebase
├── super-admin-dashboard.html     # Super Admin dashboard
├── admin-dashboard.html           # Admin dashboard
├── member-dashboard.html          # Member dashboard
├── user-management.html           # User management
├── my-profile.html               # Member profile
├── my-attendance.html            # Member attendance
├── attendance.html               # Attendance tracking
├── announcements.html            # Announcements
├── members.html                  # Member management
├── reports.html                  # Reports
├── login.html                    # Login page
├── register.html                 # Registration page
├── js/
│   ├── auth.js                   # Authentication system
│   └── main.js                   # JavaScript functionality
├── README.md                     # This file
└── .gitignore                    # Git ignore file
```

## 🔐 User Roles

- **Super Admin**: Full system access, user management, system settings
- **Admin**: Member management, attendance tracking, announcements, reports
- **Member**: Personal profile, attendance history, announcements

## 🛠️ Development

### Local Development
1. Open `index.html` in your browser
2. Use browser developer tools for debugging
3. Monitor Firebase console for database operations

### Firebase Console
- Monitor database operations in real-time
- View authentication logs
- Manage user accounts
- Configure security rules

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

## 🔥 Firebase Configuration

The app includes Firebase configuration for real-time database operations:

```javascript
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
```

## 🎯 Key Features

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

## 🚀 Deployment

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize project: `firebase init hosting`
4. Deploy: `firebase deploy`

### Static Hosting
1. Upload `index.html` and `app.js` to your web server
2. Ensure Firebase configuration is correct
3. Configure CORS settings if needed

## 🔒 Security Considerations

### Firebase Security Rules
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && (auth.uid == $uid || root.child('users').child(auth.uid).child('role').val() == 'super_admin')"
      }
    },
    "attendance": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "announcements": {
      ".read": "auth != null",
      ".write": "auth != null && (root.child('users').child(auth.uid).child('role').val() == 'admin' || root.child('users').child(auth.uid).child('role').val() == 'super_admin')"
    }
  }
}
```

## 📈 Performance Features

### Real-time Synchronization
- Instant updates across all connected clients
- Optimistic updates for better user experience
- Conflict resolution for concurrent edits

### Offline Support
- Local caching for offline functionality
- Automatic sync when connection is restored
- Graceful degradation when Firebase is unavailable

## 🎯 Future Enhancements

### Advanced Firebase Features
- **Cloud Functions**: Server-side logic for complex operations
- **Cloud Storage**: File uploads for user profiles and documents
- **Push Notifications**: Real-time notifications for announcements
- **Analytics**: User behavior tracking and insights

### Security Enhancements
- **Custom Claims**: Advanced role-based permissions
- **Audit Logging**: Track all user actions
- **Data Encryption**: Encrypt sensitive user data
- **Rate Limiting**: Prevent abuse and spam

---

**Note**: This is a complete church management system with real-time database functionality, making it suitable for production use with proper security configuration.