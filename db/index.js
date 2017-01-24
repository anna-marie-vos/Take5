
module.exports = function (knex) {

  return {
    listAllProjects: function(){
      return knex('projects')
      .select('*')
    },
    

    findById: function (table, id) {
      return knex(table)
      .select()
      .then((rows) => rows[0])
    }
  }
}
