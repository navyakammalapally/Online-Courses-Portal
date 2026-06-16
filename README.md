# Online Course Portal

## Project Overview

The Online Course Portal is a responsive web-based application developed using HTML5, CSS3, Bootstrap 5, and JavaScript. The portal allows users to browse courses, view details, register online, and contact the institute.

The website is fully responsive and works smoothly on mobile, tablet, and desktop devices.

---

## Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

---

## Bootstrap Components Used

* Navbar
* Grid System
* Typography
* Buttons
* Cards
* Forms
* Input Groups
* Alerts
* Dropdown Menu
* Carousel
* Accordion

---

## Project Pages

### Home Page

* Responsive Navbar
* Hero Section
* Carousel Slider
* Featured Course Cards
* Footer Section

### Courses Page

* Course Listing Cards
* Course Details (Duration, Fee, Description)
* Responsive Grid Layout

### About Page

* Institute Information
* Vision and Mission Sections
* Trainer Cards
* Accordion Component

### Contact Page

* Contact Form
* Input Fields (Name, Email, Subject, Message)
* Alert Message on Submission
* Reset Button

### Registration Page

* Student Registration Form
* Course Selection Dropdown
* File Upload Option
* Checkbox for Terms and Conditions
* Success Message on Submit

---

## Responsive Design

### Mobile (<576px)

* Single column layout
* Collapsible navbar
* Full-width forms and cards

### Tablet (≥768px)

* Two-column layout for cards and forms

### Desktop (≥992px)

* Multi-column layout
* Full dashboard-style course display

---

## Project Structure

```text
online-course-portal/
│
├── index.html
├── courses.html
├── about.html
├── contact.html
├── registration.html
│
├── server.js
├── courses.json
├── package.json
├── package-lock.json
│
├── css/
│   └── style.css
│
├── images/
│   ├── logo.jpg
│   ├── web.jpg
│   ├── python.jpg
│   ├── data-science.jpg
│   ├── ai.jpg
│   ├── ml.jpg
│   ├── java.jpg
│   ├── cloud.jpg
│   ├── cyber.jpg
│   └── uiux.jpg
│
├── screenshots/
│   ├── home.png
│   ├── courses.png
│   ├── about.png
│   ├── contact.png
│   ├── registration.png
│   ├── mobile-view.png
│   └── tablet-view.png
│
└── README.md
```

---

## Backend (Node.js + Express)

The backend of this project is built using **Node.js** with the **Express framework**.

It provides REST APIs for managing courses data using a JSON file as a temporary database.

### Features

- Built using Node.js runtime
- Express server for routing
- REST API implementation (CRUD)
- JSON file-based storage (courses.json)
- Middleware for parsing JSON data

---

## API Endpoints

- **GET /courses** → Get all courses  
- **GET /courses/:id** → Get course by ID  
- **POST /courses** → Add new course  
- **PUT /courses/:id** → Update course  
- **DELETE /courses/:id** → Delete course

---

## Node.js Concepts Used

- Express server setup
- Routing (GET, POST, PUT, DELETE)
- File System module (fs)
- JSON handling
- REST API design

## Screenshots

### Home Page
![Home Page](screenshots/home.PNG)

### Courses Page
![Courses Page](screenshots/courses.PNG)

### About Page
![About Page](screenshots/about.PNG)

### Contact Page
![Contact Page](screenshots/contact.PNG)

### Registration Page
![Registration Page](screenshots/registration.PNG)

### Mobile View
![Mobile View](screenshots/mobile-view.PNG)

### Tablet View
![Tablet View](screenshots/tablet-view.PNG)

---

---

## How to Run the Project

1. Download or clone the repository
2. Open project folder in VS Code
3. Open `index.html` in browser
4. Or use Live Server extension for best experience

---

## Live Demo (Frontend Only)

https://navyakammalapally.github.io/Online-Courses-Portal/

