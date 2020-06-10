# knex-cordova-sqlite
Allows you to use Knex inside a Cordova app.

## Prerequisites
This library does not actually provide any bindings to sqlite, but instead connects the [cordova-sqlite-storage](https://github.com/xpbrew/cordova-sqlite-storage) provided API to Knex.

Therefore, you need to add the cordova-sqlite-storage plugin to your app.

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
