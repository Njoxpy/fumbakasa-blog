# Fumbakasa Blog

Fumbakasa Blog is a web application that serves as a platform for creating and sharing blog posts. It is built using React.js for the frontend and Go for the backend API.

## Features

- **User Authentication:** Users can sign up, log in, and log out of their accounts.
- **Blog Post Creation:** Authenticated users can create, edit, and delete their blog posts.
- **Comments:** Users can leave comments on blog posts.
- **API Endpoints:** The backend API provides endpoints for CRUD operations on blog posts and comments.

## Technologies Used

- **Frontend:**
  - React.js
  - CSS (or styled-components, etc.) for styling
  - React Router for client-side routing
- **Backend:**
  - Go (Golang)
  - Gin framework for HTTP routing
  - GORM for interacting with the database
  - Authentication middleware (e.g., JWT) for user authentication
- **Database:**
  - PostgreSQL (or any other supported by GORM)

## Getting Started

To run the Fumbakasa Blog locally, follow these steps:

1.Clone the repository:

   ```bash
   git clone https://github.com/Njoxpy/Fumbakasa-Blog
   ```

1. Navigate to the project directory:

```sh
cd fumbakasa-blog
```

2.Set up the backend:

- Install Go if you haven't already: <https://golang.org/doc/install>
- Install dependencies:

```sh
go mod tidy
```

- Set up the database (ensure PostgreSQL is installed and running):

```sh
# Create a PostgreSQL database
createdb fumbakasa_blog

# Run database migrations
go run ./migrate.go
```

- Run the backend server:

```sh
go run ./main.go
```

3.Set up the frontend:

- Navigate to the frontend directory:

```sh
cd frontend
```

- Install dependencies:

```sh
npm install
```

- Run the frontend server:

```sh
npm start
```

4.Access the Fumbakasa Blog in your [web browser at](<http://localhost:3000>).

## Contributing

- Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.
