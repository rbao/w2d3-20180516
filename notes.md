# W2D3 CRUD with Express

## Review

Q: What is a HTTP server?

- A software that listen for HTTP request and send a HTTP response

Q: What is a HTTP client?

- A software that send HTTTP request and receives HTTP response

Q: What does the following code do?

```javascript
app.get('/', (req, res) => {
  res.render('index');
});
```

- This is just registering a route and listen for a GET request

Q: What is a route?

- Verb/Method + Path

## Safe and Idempotency

- GET        Safe, Idempotent, retrieve data
- POST       Not Safe, Not Idempotent, create data
- PUT        Not Safe, Idempotent, update data
- DELETE     Not Safe, Idempotent, remove data

## Designing RESTful Routes

### List all the drinks

GET /drinks

### Display a form that allow user to enter information about a drink

GET /drinks/new

### Create a drink

POST /drinks

### Retrieve a specific drink

GET /drinks/:id

### Display a form that allow user to enter updated information

GET /drinks/:id/edit

### Update specific drink

PUT /drinks/:id

### Delete a specifc drink

DELETE /drinks/:id/delete

## CRUD

Create
Read
Update
Delete