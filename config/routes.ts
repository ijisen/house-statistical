const notFound = './Exception/404';

export default [
  {
    path: '/',
    name: 'home',
    component: './home',
  },
  {
    path: '/house',
    name: 'house',
    routes: [
      {
        path: '/house/volume',
        name: 'volume',
        component: './house/volume',
      },
    ],
  },
  {
    path: '/exception',
    name: 'exception',
    routes: [
      {
        path: '/exception/403',
        name: '403',
        component: './Exception/403',
      },
      {
        path: '/exception/404',
        name: '404',
        component: './Exception/404',
      },
      {
        path: '/exception/500',
        name: '500',
        component: './Exception/500',
      },
    ],
  },
  { component: notFound },
];
