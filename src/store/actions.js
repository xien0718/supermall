import {
  ADD_COUNT,
  ADD_NEW_GOODS
} from './mutations-types'


export default {
  addCartx(context, payload) {
    // let goodsPlural = null
    //1.遍历cartList方法
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     goodsPlural = item
    //   }
    // }
    // if (goodsPlural) {
    //   goodsPlural.count++
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    //2.findIndex方法
    // let index = state.cartList.findIndex(item => item.iid === payload.iid)
    // if (index !== -1) {
    //   state.cartList[index].count++
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    //3.find方法
    return new Promise((resolve, reject) => {
      let repeated = context.state.cartList.find(item => item.iid === payload.iid)
      if (repeated) {
        context.commit(ADD_COUNT, repeated)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        context.commit(ADD_NEW_GOODS, payload)
        resolve('商品加入购物车成功')
      }
    })

  }
}
