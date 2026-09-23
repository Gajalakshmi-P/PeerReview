# PeerReview

PeerReview is a full-stack student peer feedback platform where students can submit their projects, review projects submitted by their peers, and track feedback through a personal dashboard.

## Features

- Student registration and login
- Secure password hashing using bcrypt
- Project submission
- View submitted projects
- Peer project reviews
- 1�5 star project ratings
- Written feedback
- Review status tracking
- Dashboard with project and review statistics
- MongoDB database integration
- Responsive React frontend

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB Atlas
- Mongoose

### Other Technologies
- CORS
- bcryptjs
- dotenv

## Project Structure

PeerReview/
+-- client/
�   +-- src/
�   �   +-- components/
�   �   +-- pages/
�   �   +-- App.jsx
�   �   +-- index.css
�   �   +-- main.jsx
�   +-- package.json
�
+-- server/
�   +-- models/
�   +-- routes/
�   +-- server.js
�   +-- package.json
�
+-- .gitignore
+-- README.md

## Application Flow

1. Student creates an account.
2. Student logs in.
3. Student submits a project with its GitHub link.
4. Other students can view available projects.
5. A student selects a project and provides a rating and feedback.
6. The project status is updated after receiving a review.
7. Dashboard statistics show submitted projects, reviews given, reviews received, and pending feedback.

## Running the Project

### Start the Backend

Open a terminal:

cd server
npm install
node server.js

The backend runs on:

http://localhost:5000

### Start the Frontend

Open another terminal:

cd client
npm install
npm run dev

The frontend runs on:

http://localhost:5173

## Environment Variables

The backend uses a .env file for configuration.

Example:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Do not commit the .env file to GitHub.

## Future Enhancements

- JWT-based authentication
- User profile pages
- Edit and delete submissions
- Multiple reviews per project
- Review history
- Search and filtering
- Notifications
- Improved project matching between students

## Purpose

PeerReview was developed as a Full Stack MERN capstone project to demonstrate frontend development, backend API development, database integration, authentication, and peer feedback workflows.
## Screenshots

### Login
![Login Page](screenshots/login.png)

### Register
![Register Page](screenshots/register.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Project Submission
![Project Submission](screenshots/submissions.png)

### Peer Reviews
![Peer Reviews](screenshots/reviews.png)