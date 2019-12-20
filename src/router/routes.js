export const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    name: 'List',
    path: '/list',
    component: () => import('@/views/List'),
  },
  {
    name: 'Category',
    path: '/category/:name',
    component: () => import('@/views/Category')
  },
  {
    name: 'NewlyBuild',
    path: '/newly-build/:attribute',
    component: () => import('@/views/NewlyBuild')
  }
]