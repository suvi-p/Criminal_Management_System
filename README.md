# Criminal Management System

A web-based criminal database management system built for police departments to manage criminal records, cases, officers, and perform criminal detection — all from a single dashboard.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages & Modules](#pages--modules)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Contributing](#contributing)


---

## Overview

The **Criminal Management System** is a frontend web application designed for law enforcement agencies. It provides a secure login portal with OTP-based two-factor authentication, a central dashboard for quick stats, and dedicated modules to manage criminals, cases, and officers. It also includes a fingerprint-based criminal detection feature.

---

## Features

- 🔐 **Secure Login** — Police station-based login with email, password, and OTP verification
- 🏠 **Dashboard** — Overview of total criminals, cases, officers, and recent activities
- 👤 **Manage Criminals** — Register, view, edit, and delete criminal profiles
- 📁 **Manage Cases** — Add, update, and track criminal cases
- 👮 **Manage Officers** — Add and manage officer records
- 🔍 **Criminal Detection** — Live fingerprint scanning and match identification
- ⚙️ **Settings** — User account and system preferences
- ❓ **Help & Support** — In-app support section
- 🔑 **Forgot Password** — Password recovery flow
- 📝 **Sign Up** — New officer registration

---

## Pages & Modules

| Page | File | Description |
| --- | --- | --- |
| Login | `login.html` | Police station login with OTP support |
| Two-Factor Auth | `2fa.html` | OTP verification screen |
| Sign Up | `signup.html` | New officer registration |
| Forgot Password | `forget.html` | Password recovery |
| Dashboard | `dashboard.html` | Stats overview & recent activity |
| Manage Criminals | `managecrim.html` | CRUD operations on criminal records |
| Manage Cases | `managecase.html` | CRUD operations on case files |
| Manage Officers | `manageofficer.html` | Officer management |
| Criminal Detection | `detection.html` | Fingerprint scanning & matching |
| Settings | `settings.html` | Account & system settings |
| Help & Support | `help.html` | Support & FAQ |
| About Us | `aboutus.html` | Project information |

---

## Repository Structure

```
criminal-management-system/
│
├── login.html               # Login page
├── login.css
├── login.js
├── 2fa.html                 # Two-factor authentication
├── 2fa.css
├── 2fa.js
├── signup.html              # Sign up page
├── signup.css
├── signup.js
├── forget.html              # Forgot password
├── forget.css
├── forget.js
├── dashboard.html           # Main dashboard
├── dashboard.css
├── dashboard.js
├── managecrim.html          # Manage criminals
├── managecrim.js
├── managecase.html          # Manage cases
├── managecase.css
├── managecase.js
├── manageofficer.html       # Manage officers
├── manageofficer.css
├── manageofficer.js
├── detection.html           # Criminal detection
├── detection.css
├── settings.html            # Settings
├── settings.css
├── settings.js
├── help.html                # Help & support
├── help.css
├── help.js
├── aboutus.html             # About us
├── aboutus.css
├── back.jpg                 # Background image
├── logo2x.png               # App logo
├── icons8-*.png             # UI icons
└── README.md
```

---

## Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure and layout |
| CSS3 | Styling and responsive design |
| JavaScript (Vanilla) | Client-side logic and interactivity |
| Font Awesome | UI icons |

> No backend framework or database is used — this is a frontend-only project with static data.

---

## Getting Started

No installations or dependencies required. Just open in a browser.

**1. Clone the repository**

```bash
git clone https://github.com/your-username/criminal-management-system.git
cd criminal-management-system
```

**2. Open in browser**

Simply open `login.html` in your browser:

```bash
# On Mac
open login.html

# On Windows
start login.html

# Or use Live Server in VS Code (recommended)
```

> **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for the best experience.

---

## Screenshots

> _Add screenshots of the Dashboard, Manage Criminals, and Detection pages here._

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---


This project is open-source and available under the [MIT License](LICENSE).

