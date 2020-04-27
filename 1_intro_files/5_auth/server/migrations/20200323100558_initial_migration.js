
exports.up = function(knex) {
  return knex.schema
    .createTable('user', (table) => {
        table.increments('id');
        table.string('username').unique();
        table.string('first_name')
        table.string('last_name');
        table.string('password');
        table.date('birthday');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('email', (table) => {
        table.increments('id');
        table.integer('user_id').unsigned().references('user.id').notNullable()//.onDelete('cascade');
        table.string('email')
    })
    .createTable('address', (table) => {
        table.increments('id');
        table.string('street_name')
        table.string('zip');
        table.string('city');
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('user.id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('address')
    .dropTableIfExists('email')
    .dropTableIfExists('user');
};
    