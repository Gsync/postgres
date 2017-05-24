const settings = require("./settings");//settings.json

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      host     : settings.hostname,
      port     : settings.port,
      ssl      : settings.ssl
  }
});

const query = knex.select().from('famous_people');
//console.log(query.toString());
query.asCallback((error, results) => {
  results.forEach((result) => {

  console.log(result.first_name);
  });
  knex.destroy();
});


function outputPeople() {

}