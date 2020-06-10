const Dialect = require('knex/lib/dialects/sqlite3/index.js');

function rowsToArray (rows) {
  const allRows = [];

  for (let i = 0; i < rows.length; ++i) {
    allRows.push(rows.item(i));
  }

  return allRows;
}

function Database (filename, callback) {
  setTimeout(callback);

  const db = window.sqlitePlugin.openDatabase({
    name: filename,
    location: 'default'
  });

  return {
    all: function (sql, params, callback) {
      db.executeSql(sql, params || [], function (rs) {
        callback(null, rowsToArray(rs.rows));
      }, callback);
    },
    run: function (sql, params, callback) {
      db.executeSql(sql, params || [], function (rs) {
        callback.call({ lastID: rs.insertId }, null, rs);
      }, callback);
    }
  };
}

Dialect.prototype._driver = () => ({
  Database
});

module.exports = Dialect;
