/**
 * 接口域名的管理
 */

//接口统一使用dynamicUrl变量
const dynamicUrl = '1.1.1.1'//process.env.VUE_APP_SERVER_URL

//console.log('api-path', process.env.VUE_APP_SERVER_URL)

const base = {
	dynamicUrl: dynamicUrl,//接口请求地址
}

export default base
