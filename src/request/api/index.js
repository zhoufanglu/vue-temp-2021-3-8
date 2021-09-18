/**
 * api接口的统一出口
 */
//动态加载模块
let ms = require.context('./module', false, /\.js$/)
let modules = {}
ms.keys().forEach(k => {
  let n = k.substring(2, k.length - 3)
  modules[n] = ms(k).default
})

// 导出接口
export default {
  modules
	// ……
}
