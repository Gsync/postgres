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

const query = knex('famous_people').insert({first_name: args[0], last_name: args[1], birthdate: args[2]});
console.log(query.toString());

query.asCallback((error, results) => {

    console.log(`${results.length} row added!`);

    knex.destroy();
});

// function outputPeople(people) {

//   people.forEach((result) => {
//     console.log(`Found ${people.length} person(s) by the name of '${args.toString()}'`);
//     console.log("Searching...\n")
//     console.log(`${result.first_name} ${result.last_name}, born '${result.birthdate}'`);
//   });
// }


