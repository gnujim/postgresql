const input = process.argv[2];
const settings = require('./settings'); //settings.json
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people').where('first_name', input).asCallback((err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(result[0]);
  knex.destroy();
});
