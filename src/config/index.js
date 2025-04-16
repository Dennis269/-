// 当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://mock.apifox.cn/m1/4068509-0-default/api',
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://mock.apifox.cn/m1/4068509-0-default/api',
  },
  pro: {
    baseApi: '//future.com/api',
    mockApi: 'https://mock.apifox.cn/m1/4068509-0-default/api',
  },
}

export default {
  env,
  mock:false,
  ...EnvConfig[env]
}