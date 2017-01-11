module.exports = knexFunctions(knex)

function knexFunctions(knex){
  return {
    listAll:listAll(knex),
    addItem:addItem(knex),
    editItem:editItem(knex),
    deleteItem:deleteItem(knex)
  }
}

function listAll(knex){

}

function addItem(knex){

}

function editItem(knex){

}

function deleteItem(knex){

}
