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

function addTodo (todo) {
  return knex('todos').insert(todo)
}

function getTodos () {
  return knex('todos').select('*')
}

module.exports = {
  init,
  addTodo,
  getTodos
}
```
