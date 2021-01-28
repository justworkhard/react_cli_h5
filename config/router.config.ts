export default [
  {
    path: '/',
    component: '../layouts/index',

    routes: [

      { path: '/404', component: '404' },
      {
        path: '/', component: './baseLayout/index', routes: []
      }
    ],
  },
]; 
