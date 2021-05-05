import {
  ADD_COUNT,
  ADD_NEW_GOODS,
} from './mutations-types'
export default {
  [ADD_COUNT](state, payload) {
    payload.count++
  },
  [ADD_NEW_GOODS](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  changeTabIndex(state, index) {
    state.tabShow = index
  }
}
