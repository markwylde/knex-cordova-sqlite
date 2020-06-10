# Knex Driver for SQLite in Cordova
Allows you to use Knex inside a cordova app.

## Installation
```bash
npm install --save knex-cordova-sqlite
```

## Example Usage
```javascript
const knex = require('knex')({
  client: require('knex-cordova-sqlite'),
  connection: {
    filename: 'todos-' + Date.now() + '.db'
  }
});

async function init () {
  await knex.schema.createTable('todos', table => {
    table.increments('id');
    table.string('title');
  })
}

async function addTodo (todo) {
  await knex('todos').insert(todo)
  console.log('todo added')
}

async function getTodos () {
  const todos = await knex('todos').select('*')
  console.log('todos got', todos)
  return todos
}

module.exports = {
  init,
  addTodo,
  getTodos
}
```
