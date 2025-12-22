## errors encountered

```bash
Server running at: http://localhost:5000
Database connected successfully

node:_http_outgoing:655
    throw new ERR_HTTP_HEADERS_SENT('set');
          ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:655:11)
    at ServerResponse.header (express/lib/response.js:794:10)
    at ServerResponse.send (express/lib/response.js:174:12)
    at ServerResponse.json (express/lib/response.js:278:15)
    at createAnnouncement (controllers/announcement.controller.js:46:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
}
```

**Date:** February 3, 2025

### Issue Description

While creating an announcement, the server threw an `ERR_HTTP_HEADERS_SENT` error.
This occurs when a response is sent more than once for the same request, typically due to missing `return` statements or multiple response calls inside a controller.

---

### Middleware Configuration Issue (Image Upload Validation)

When defining the **create advice** route with an image upload middleware, ensure that the middleware:

- Is correctly defined as a function
- Is properly exported
- Is imported correctly in the route file

Failure to do so results in the following error:

```bash
C:\Users\Administrator\Desktop\kilimokacha\backend\node_modules\express\lib\router\route.js:216
        throw new Error(msg);
        ^

Error: Route.post() requires a callback function but got a [object Object]
    at Route.post (express/lib/router/route.js:216:15)
    at express/lib/router/index.js:521:19
    at routes/advice.routes.js:25:8
    at Module._compile (node:internal/modules/cjs/loader:1739:14)
    at Module.load (node:internal/modules/cjs/loader:1473:32)
    at Function._load (node:internal/modules/cjs/loader:1285:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:234:24)
    at Module.require (node:internal/modules/cjs/loader:1495:12)

Node.js v23.6.0
[nodemon] app crashed — waiting for file changes before starting...
```

---

### Root Cause

This error occurs when a route expects a callback function but instead receives an object.
Common causes include:

- Exporting the middleware incorrectly
- Importing the entire module instead of the function
- Forgetting to export the middleware function

---

### Summary

- `ERR_HTTP_HEADERS_SENT` → response sent more than once
- `Route.post() requires a callback function` → middleware not exported or imported correctly
