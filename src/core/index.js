/*
 * @Date: 2020-05-13 21:05:30
 * @LastEditors: GWK
 * @LastEditTime: 2020-06-27 10:33:30
 * @FilePath: /vue/src/core/index.js
 */
// 引入 Vue 
import Vue from './instance/index'
//  引入初始化全局方法
import { initGlobalAPI } from './global-api/index'
//  判断是否是 服务端渲染
import { isServerRendering } from 'core/util/env'
// 
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
