/*
 * @Date: 2020-05-13 21:05:30
 * @LastEditors: GWK
 * @LastEditTime: 2020-06-27 10:39:25
 * @FilePath: /vue/src/core/instance/index.js
 */ 
// 引入初始化混入
import { initMixin } from './init'
// 引入状态混入
import { stateMixin } from './state'
//  引入渲染混入
import { renderMixin } from './render'
//  引入事件 混入
import { eventsMixin } from './events'
//  引入生命周期混入
import { lifecycleMixin } from './lifecycle'
// 引入警告
import { warn } from '../util/index'
// 构造器函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
//原型链上添加 init方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
