## Not Found Route (404)

The **Not Found route** handles requests to endpoints that do not exist. It should be defined after all other routes.

It returns a **404 status code** with a clear error message.

```sh
curl http://localhost:4000/djdjdjd
```

- response

```json
{ "message": "Router not found: /djdjdjd", "sucess": false }
```
