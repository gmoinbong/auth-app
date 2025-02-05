# Authentication Application (auth-app)

## Overview
This project is a small authentication and authorization application built with Next.js, Tailwind CSS, and Shadcn. It connects to an existing authentication API to manage user login and registration.

## Tech Stack
- **Framework**: Next.js (with TurboPack)
- **Styling**: Tailwind CSS, Shadcn
- **State Management**: Zustand
- **Form Handling & Validation**: React Hook Form, Zod
- **API Requests**: Axios

## API Repository
The application connects to the following API: [auth-api](https://github.com/Veel-IT/auth-api)

## Project Link:
[auth-app](https://auth-app-iota-ten.vercel.app/)

## Features
- User authentication (login & registration forms)
- Form validation using React Hook Form & Zod
- Authentication guard to protect pages
- Server-Side Rendering (SSR) support
- Logout functionality
- ESLint and Prettier setup
- Circle configured for CI/CD

## Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/auth-app.git
cd auth-app

# Install dependencies
npm install
```

## Development
To start the development server, run:
```sh
npm run dev
```
This will start the Next.js application in development mode.

## Build and Deployment
To create a production build, run:
```sh
npm run build
```
To start the production server, run:
```sh
npm run start
```

## Linting and Formatting
To run ESLint:
```sh
npm run lint
```
The project also includes Husky and lint-staged for pre-commit hooks.

## Authentication Flow
1. User accesses the application.
2. A guard checks if the user is authenticated.
   - If authenticated, the user is redirected to the home page.
   - If not authenticated, the user is redirected to the login page.
3. Users can log in or register using forms.
4. On successful login, authentication tokens are stored.
5. Users can log out from the home page.

## Project Goals
- Demonstrate form handling
- Show a well-structured project setup
- Implement state management effectively
- Utilize UI libraries and custom UI components

## Extra Features Implemented
- Next.js SSR support
- Authentication flow that does not affect SSR
- Configured ESLint and Prettier
- GitHub Actions for automated linting and testing

