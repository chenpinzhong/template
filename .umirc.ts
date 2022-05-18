import { defineConfig } from 'umi';


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#DDA57A',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/user', component: '@/layouts/index',
      routes: [
        {
          path: '/user/index', component: '@/pages/user/index'
        },
      ],
    },
    { path: '/dva', component: '@/pages/dva' },
  ],
  fastRefresh: {},
  //mock:false, /*模拟关闭*/
});
