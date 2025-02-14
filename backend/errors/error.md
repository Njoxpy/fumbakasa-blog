```bash
listening on port: http://localhost:5000
connected to Db
node:_http_outgoing:655
    throw new ERR_HTTP_HEADERS_SENT('set');
          ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:655:11)
    at ServerResponse.header (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:794:10)
    at ServerResponse.send (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:174:12)
    at ServerResponse.json (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:278:15)
    at createAnnouncement (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\controllers\announcement.controller.js:46:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
```


Februaray 3, 2025
- Into the routes for advice create, for image upload when to createa middleware for validating image make sure the middleware has been exposed that has been exported if not you will get this error.

```bash
C:\Users\Administrator\Desktop\kilimokacha\backend\node_modules\express\lib\router\route.js:216
        throw new Error(msg);
        ^

Error: Route.post() requires a callback function but got a [object Object]
    at Route.<computed> [as post] (C:\Users\Administrator\Desktop\kilimokacha\backend\node_modules\express\lib\router\route.js:216:15)        
    at proto.<computed> [as post] (C:\Users\Administrator\Desktop\kilimokacha\backend\node_modules\express\lib\router\index.js:521:19)        
    at Object.<anonymous> (C:\Users\Administrator\Desktop\kilimokacha\backend\routes\advice.routes.js:25:8)
    at Module._compile (node:internal/modules/cjs/loader:1739:14)
    at Object..js (node:internal/modules/cjs/loader:1904:10)
    at Module.load (node:internal/modules/cjs/loader:1473:32)
    at Function._load (node:internal/modules/cjs/loader:1285:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:234:24)
    at Module.require (node:internal/modules/cjs/loader:1495:12)

Node.js v23.6.0
[nodemon] app crashed - waiting for file changes before starting...
```