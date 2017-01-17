const React = require('react')

module.exports = function (props) {
  const { name, quantity, price, store } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
      <td>
        <button 
          onClick={() => store.addItemToCart(item)} 
          type="button" 
          name="remove">add</button>
      </td>
    </tr>
  )
}
