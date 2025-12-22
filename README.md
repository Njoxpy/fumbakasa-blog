# Fumbakasa Blog

Fumbakasa Blog is a **full-stack web application** that serves as a platform for creating, reading, updating, and deleting blog posts. It is built using **React.js** for the frontend and **Express.js / Node.js** for the backend, with **MongoDB** as the database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)

## Features

- Create, read, update, and delete blog posts (CRUD)
- Backend validation for title, body, and author
- Supports multiple predefined authors (`NjoxPy`, `Chax`, `Zai`, `Alpha`, `Iptsum`)
- React frontend consuming the backend API
- Organized documentation for API endpoints and errors

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Documentation:** Markdown files in `docs/api` and `docs/error`

## Project Structure

```
fumbakasa-blog/
├── backend/           # Backend server (Express.js + MongoDB)
│   ├── config/
│   ├── constants/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── client/            # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── checkEnv.js
├── docs/              # Documentation
│   ├── api/
│   │   ├── healthy.md
│   │   ├── notfound.md
│   │   └── posts.md
│   └── error/
│       └── error.md
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Njoxpy/fumbakasa-blog.git
cd fumbakasa-blog
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../client
npm install
```

## Environment Variables

Create a `.env` file in the **backend** folder:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/dbname
JWT_SECRET=
```

Create a `.env` file in the **frontend** folder:

```env
# API Base URL
REACT_APP_BASE_URL=http://localhost:4000/
REACT_APP_TITLE=Fumbakasa Blog
```

## Running the Application

### Backend

```bash
cd backend
npm run dev
```

Server will run at: `http://localhost:4000`

### Frontend

```bash
cd client
npm run start
```

App will open in your browser at: `http://localhost:3000`

## API Documentation

All backend API endpoints are documented in the `docs/api` folder:

- [`healthy.md`](docs/api/healthy.md) – Health check endpoints
- [`notfound.md`](docs/api/notfound.md) – 404 or missing resources
- [`posts.md`](docs/api/posts.md) – Blog CRUD endpoints

Example backend endpoints for posts:

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/v1/blogs`     | Create a new blog |
| GET    | `/api/v1/blogs`     | Get all blogs     |
| GET    | `/api/v1/blogs/:id` | Get a single blog |
| PUT    | `/api/v1/blogs/:id` | Update a blog     |
| DELETE | `/api/v1/blogs/:id` | Delete a blog     |

## Error Handling

All backend errors are documented in the `docs/error` folder:

- [`error.md`](docs/error/error.md) – Describes common errors and their responses

Examples of handled errors:

- `400 BAD_REQUEST` – Missing or invalid input
- `404 NOT_FOUND` – Resource not found
- `500 SERVER_ERROR` – Internal server error

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/xyz`)
5. Create a Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE).
