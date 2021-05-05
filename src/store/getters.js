export default {
  cartList(state) {
    return state.cartList
  },
  cartListLength(state) {
    return state.cartList.length
  },
  totalPrice(state, getters) {
    return '¥' + getters.cartList
      .filter(item => item.checked)
      .reduce((preValue, item) => preValue + item.price * item.count, 0)
      .toFixed(2)
  },
  checkedLength(state, getters) {
    return getters.cartList.filter(item => item.checked).length
  }
}
