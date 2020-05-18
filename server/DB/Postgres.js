const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'ecommerce',
  port: '5432',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected');
  }
});

module.exports = pool;
