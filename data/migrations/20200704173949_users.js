
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments()
      users.string('name')
      .notNullable()
      users.string('email')
      .notNullable()
      .unique()
      users.string('password')
      .notNullable()
  })
  .then(()=>{
      console.log('\n === Users Table Created === \n')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
  .then(()=>{
      console.log('\n === Users Table Dropped === \n')
  })
};
