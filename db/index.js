
module.exports = function (knex) {

  return {
    getTableData: function(table){
      return knex(table)
      .select('*')
    },

    getProjectAndPPEData: function () {
      return knex('projects_ppe')
      .join('projects','proj_id','=','projects.project_id')
      .join('ppeGear','ppeGear_id','=','ppeGear.ppe_id')
      .select('*')
    },

    getAllProjects: function(){
      return knex('projects')
      .select('project_id' , 'project_number' , 'project_name')
    },

    getProjectAndPpeById: function(id){
      return knex('projects_ppe')
      .where({'proj_id':id})
      .join('projects','proj_id','=','projects.project_id')
      .join('ppeGear','ppeGear_id','=','ppeGear.ppe_id')
      .then(data => {
        return this.formatProjectPpeData(data)
      })
    },

    formatProjectPpeData: function(projPpeGear){
      const PpeInfo= []
      const projPpeInfo = {}
      const projInfo = {
        project_id: projPpeGear[0].project_id,
        project_number: projPpeGear[0].project_number,
        project_name: projPpeGear[0].project_name,
        location: projPpeGear[0].location,
        SWMS: projPpeGear[0].SWMS,
        important_Notices: projPpeGear[0].important_Notices
      }

      projPpeGear.map(gearItem => {
        const PpeItem = {}
        PpeItem.ppe_id = gearItem.ppe_id
        PpeItem.ppe_name = gearItem.ppe_name
        PpeItem.ppe_image = gearItem.ppe_image
        PpeInfo.push(PpeItem)
      })

      projPpeInfo.project = projInfo
      projPpeInfo.ppe = PpeInfo

      return projPpeInfo
    }

  }
}
