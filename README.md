# campusconnect-api

# campusconnect-api

# Project Planning
Project Concept

The project I am building is called CampusConnect API. It is a back-end application that helps students organize and join campus events or study sessions. The idea is that any student can post an event, others can join, and admins can manage the categories and users.
This project shows my understanding of Node.js, TypeScript, and Firebase. It is simple, realistic, and fits a campus environment that students can relate to.

# Scope and Functionality

The API will have three main resources besides Users.

1. Events - students can create, update, or delete events.

Endpoints: GET /events, GET /events/:id, POST /events, PUT /events/:id, DELETE /events/:id

2. Participants - tracks users who join events.

Endpoints: POST /events/:id/join, GET /participants/mine, PATCH /participants/:id

3. Categories - groups events into topics like "Study Group," "Sports," or "Club Meeting."

Endpoints: GET /categories, POST /categories, PUT /categories/:id, DELETE /categories/:id

Database: Firebase Firestore will store events, participants, and categories.
Authentication: Firebase Authentication with roles (admin, organizer, user).
New Component: Nodemailer will send a confirmation email when a student joins an event.
Testing: Jest will be used to reach at least 65% test coverage.

# Course Content Alignment

This project also uses the main topics covered in the course.

Node.js, TypeScript, and Express for building the REST API.

Firebase Firestore for the database.

Firebase Authentication for secure login.

Joi for input validation.

Helmet, dotenv, and CORS for security and environment setup.

OpenAPI for API documentation.

Jest for unit testing.

GitHub Actions for automated testing.
The extra component, Nodemailer, adds something new that was not covered in class.

GitHub Project Setup

# Repository Name: campusconnect-api

# Branches:

main - final version of the project

develop - branch for ongoing work

feature - branch for specific features

# Project Board Columns: 
Backlog - In Progress - In Review - Done

# Example Issues:

feat: initialize express and typescript
feat: setup firebase auth and firestore
feat: create events CRUD
feat: create categories CRUD
feat: add participants endpoints
feat: integrate nodemailer
test: add unit tests
docs: setup swagger documentation

All code changes will be tracked with GitHub issues and feature branches to keep the workflow organized.