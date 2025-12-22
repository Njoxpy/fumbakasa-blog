# Blog (Post) API Documentation

This document describes the available endpoints for managing blog posts, including creating, retrieving, updating, and deleting blogs.

---

## Model Overview

### Post Schema

```js
title      : String (required, 2–32 characters)
body       : String (required, 20–400 characters)
author     : String (required, enum: NjoxPy | Chax | Zai | Alpha | Iptsum)
timestamps : createdAt, updatedAt
```

---

## Create Blog

### Endpoint

```
POST /api/v1/blogs
```

### Description

Creates a new blog post and persists it to the database using the Post model.

### Request Body

```json
{
  "title": "My First Blog",
  "body": "This is the body of the blog post with enough content.",
  "author": "NjoxPy"
}
```

### Example Request

```sh
curl -X POST http://localhost:4000/api/v1/blogs \
-H "Content-Type: application/json" \
-d '{
  "title": "MongoDB Basics",
  "body": "Learn MongoDB fundamentals with Node.js and Express. This guide covers schemas, models, and CRUD operations.",
  "author": "NjoxPy"
}'
```

### Response (201 Created)

```json
{
  "message": "New blog added",
  "data": {
    "title": "MongoDB Basics",
    "body": "Learn MongoDB fundamentals with Node.js and Express. This guide covers schemas, models, and CRUD operations.",
    "author": "NjoxPy",
    "_id": "69490ccc80625f61b2c6408a",
    "createdAt": "2025-12-22T09:18:04.096Z",
    "updatedAt": "2025-12-22T09:18:04.096Z",
    "__v": 0
  }
}
```

---

## Get All Blogs

### Endpoint

```
GET /api/v1/blogs
```

### Description

Retrieves a list of all blog posts from the database.

### Request Body

- No request body required

### Example Request

```sh
curl http://localhost:4000/api/v1/blogs
```

### Response (200 OK)

```json
{
  "blogs": [
    {
      "_id": "69490d4780625f61b2c6408f",
      "title": "MongoDB Basics",
      "body": "Learn MongoDB fundamentals with Node.js and Express. This guide covers schemas, models, and CRUD operations.",
      "author": "NjoxPy",
      "createdAt": "2025-12-22T09:20:07.660Z",
      "updatedAt": "2025-12-22T09:20:07.660Z",
      "__v": 0
    }
  ]
}
```

---

## Get Single Blog

### Endpoint

```
GET /api/v1/blogs/{id}
```

### Description

Fetches a single blog post using its unique ID.

### URL Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | Blog ID     |

### Request Body

- None

### Example Request

```sh
curl http://localhost:4000/api/v1/blogs/69490d4780625f61b2c6408f
```

### Response (200 OK)

```json
{
  "message": "Blog retrieved successfully",
  "data": {
    "_id": "69490d4780625f61b2c6408f",
    "title": "MongoDB Basics",
    "body": "Learn MongoDB fundamentals with Node.js and Express. This guide covers schemas, models, and CRUD operations.",
    "author": "NjoxPy",
    "createdAt": "2025-12-22T09:20:07.660Z",
    "updatedAt": "2025-12-22T09:20:07.660Z",
    "__v": 0
  }
}
```

---

## Update Blog

### Endpoint

```
PUT /api/v1/blogs/{id}
```

### Description

Updates an existing blog post identified by its ID.

### URL Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | Blog ID     |

### Example Request

```sh
curl -X PUT http://localhost:4000/api/v1/blogs/69491165aa572269010455c0 \
-H "Content-Type: application/json" \
-d '{
  "title": "Getting Started with ReactJS",
  "body": "React is a library for building web and native user interfaces using reusable components written in JavaScript.",
  "author": "Zai"
}'
```

### Request Body (JSON)

```json
{
  "title": "Updated Blog Title",
  "body": "Updated blog body with valid length.",
  "author": "Chax"
}
```

### Response (200 OK)

```json
{
  "message": "Updated successfully",
  "data": {
    "_id": "69491165aa572269010455c0",
    "title": "Getting Started with ReactJS",
    "body": "React is a library for building web and native user interfaces using reusable components written in JavaScript.",
    "author": "Zai",
    "createdAt": "2025-12-22T09:37:41.762Z",
    "updatedAt": "2025-12-22T09:41:20.988Z",
    "__v": 0
  }
}
```

---

## Delete Blog

### Endpoint

```
DELETE /api/v1/blogs/{id}
```

### Description

Deletes a blog post from the database using its ID.

### URL Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | Blog ID     |

### Request Body

- None

### Example Request

```sh
# Template
curl -X DELETE http://localhost:4000/api/v1/blogs/:id

# Example
curl -X DELETE http://localhost:4000/api/v1/blogs/69490d4780625f61b2c6408f
```

### Response (200 OK)

```json
{
  "message": "Blog deleted",
  "data": {
    "_id": "69490d4780625f61b2c6408f",
    "title": "MongoDB Basics",
    "body": "Learn MongoDB fundamentals with Node.js and Express. This guide covers schemas, models, and CRUD operations.",
    "author": "NjoxPy",
    "createdAt": "2025-12-22T09:20:07.660Z",
    "updatedAt": "2025-12-22T09:20:07.660Z",
    "__v": 0
  }
}
```

---

## Validation Rules

### Title

- Required
- Minimum length: 2 characters
- Maximum length: 32 characters

### Body

- Required
- Minimum length: 20 characters
- Maximum length: 400 characters

### Author

- Required
- Must be one of the following values:

  - `NjoxPy`
  - `Chax`
  - `Zai`
  - `Alpha`
  - `Iptsum`
