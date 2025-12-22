## Healthy Routes

In Express.js, **healthy routes** (or health check endpoints) are used to check whether an application is running correctly. Monitoring tools often call these routes to verify the app’s status. They are not a built-in feature, but something you create yourself.

- A basic health route returns a **200 OK** response.
- A more advanced health route can return extra details like **uptime**, **current time**, and **service status**.

### Example: Check health status

```sh
curl http://localhost:4000/api/healthy
```

### Example response

The endpoint returns a message, a success status, the app’s uptime (in seconds), and the current timestamp.

```json
{
  "message": "Fumbakasa blog is running",
  "sucess": true,
  "status": "sucess",
  "uptime": 19.610687404,
  "timeStamp": "2025-12-22T08:13:52.742Z"
}
```
