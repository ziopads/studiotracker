
exports.up = function(knex, Promise) {
  return Promise.all([
    // CREATE 'USERS' TABLE
    knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').unique().defaultTo('counterparty');
      table.string('email').unique();
      table.string('password').notNullable().defaultTo();
      table.string('isGod').defaultTo(false);
      table.string('firstname');
      table.string('lastname');
      table.string('profile_url').defaultTo('https://s3-us-west-2.amazonaws.com/divideyourself.com/images/1divide-logo.svg');
    }),
    // CREATE 'GEAR' TABLE
    knex.schema.createTable('items', (table) => {
      table.increments();
    }),
    // CREATE 'GEARTYPES' TABLE
    knex.schema.createTable('geartypes', (table) => {

    }),

    // CREATE 'MANUFACTURERS' TABLE
    knex.schema.createTable('', (table) => {
      table.increments();
      table.string('manufacturer').unique();
    }),
    // CREATE 'SALES' TABLE
    knex.schema.createTable('sales', (table) => {
      table.increments();
      table.
    }),

    // CREATE 'ITEMS_MANUFACTURERS' TABLE
    // CREATE TABLE
};

exports.down = function(knex, Promise) {
  return
};
