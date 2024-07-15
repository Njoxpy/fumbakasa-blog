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
  - CSS Framework(Bootstrap) for styling
  - React Router for client-side routing

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

2. Start project:

```sh
npm i

npm start
```

3. Start json-server

```sh
# install json-server
npm i -g json-server

# start server
json-server data/blogs.json --port 3000
```

4.Access the Fumbakasa Blog in your [web browser at http://localhost:3000](http://localhost:3000).

## Contributing

- Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.
