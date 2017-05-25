
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){

      table.integer('famous_people_id').references('famous_people.id').unsigned();
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', (table) => {
    table.dropColumn("famous_people_id");
  });
};
