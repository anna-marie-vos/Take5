
module.exports = function (knex) {

  return {
    getTableData: function(table){
      return knex(table)
      .select('*')
    },

    getProjectAndPPEData: function (indexTable) {
      return knex(indexTable)
      .join('projects','proj_id','=','projects.project_id')
      .join('ppeGear','ppeGear_id','=','ppeGear.ppe_id')
      .select('*')
    }
  }
}
