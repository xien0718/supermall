import Toast from './Toast'
const obj = {}
obj.install = (Vue) => {
  //1.创建构造器
  const toastConstructor = Vue.extend(Toast)

  //2.创建toast对象
  const toast = new toastConstructor()

  //3.创建一个div 把toast对象挂载到上面
  toast.$mount(document.createElement('div'))

  //4.toast.$el就是上面创建的div，将其添加到body中
  document.body.appendChild(toast.$el)


  //5.在vue中可以用$toast来使用toast插件中定义好的函数
  Vue.prototype.$toast = toast

}
export default obj
