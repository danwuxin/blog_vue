const meta = {auth: false}

const frameIn = [
  {
    path: '/',
    redirect: {name: 'index'},
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      }
    ]
  }


]
export  const frameInRoutes = frameIn
export default [
  ...frameIn
]
