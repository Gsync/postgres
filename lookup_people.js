const settings = require("./settings");//settings.json
var args = process.argv.slice(2);

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

const query = knex.select().from('famous_people').where('first_name', args.toString()).orWhere('last_name', args.toString());
console.log(query.toString());


function outputPeople(people) {

  people.forEach((result) => {
    console.log(`Found ${people.length} person(s) by the name of '${args.toString()}'`);
    console.log("Searching...\n")
    console.log(`${result.first_name} ${result.last_name}, born '${result.birthdate}'`);
  });
}

query.asCallback((error, results) => {

    outputPeople(results);

    knex.destroy();
});


