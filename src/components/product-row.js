const React = require('react')

module.exports = function (props) {
  const { name, price, stock, store } = props

  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>{stock}</td>
      <td>
        <button 
          onClick={() => store.addItemToCart(item)} 
          type="button" 
          name="add">
            add
        </button>
      </td>
    </tr>
  )
}
