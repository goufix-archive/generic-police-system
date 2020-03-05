import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');

    table
      .string('username')
      .notNullable()
      .unique();

    table
      .string('email')
      .notNullable()
      .unique();
  });
}

//#region Down method that deletes the table
export function down(knex: Knex) {
  knex.schema.dropTable('users');
}
//#endregion
