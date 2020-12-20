
# TODO App
A simple app to keep track of your todos

## Technologies
Project is created with:
* React & Redux
* Node.js & Express.js
* SQLite3
* SCSS

## Setup
To run this project, install it locally using npm:
```
$ cd ../full-stack-todo-app
$ npm install
$ npm run knex migrate:latest
$ npm run knex seed:run
$ npm run dev
```

## APIs

| Method | Path | Description | NOTES |
|---|---|---|---|
| GET | /api/v1/tasks | gets all tasks from the database
| POST | /api/v1/tasks | adds a new task to the database
| DELETE | /api/v1/tasks/:id | deletes task by id
| PATCH | /api/v1/tasks/:id | updates a task by id
|---|---|---|---|

### API request and response bodies
#### /api/v1/tasks

##### _Response_

```js 
{
  id
  task
  priority
  completed
}
```