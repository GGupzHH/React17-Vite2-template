import Home from '@/modules/HomeDemo/pages/home.jsx'
import Home1 from '@/modules/HomeDemo/pages/home1.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'
import TestDemo1 from '@/modules/TestDemo/pages/test1.jsx'
import DemoParams from '@/modules/TestDemo/pages/test-params'
import Login from '@/modules/UserAccount/pages/login'

const routerMap = [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test'
    },
    component: Demo,
    child: [
      {
        path: '/test/a',
        name: '/test/a',
        meta: {
          title: 'test/a'
        },
        component: Home,
        exact: true,
        // child: [
        //   {
        //     path: '/test/a',
        //     name: 'demo',
        //     meta: {
        //       title: 'test/a'
        //     },
        //     component: Home1,
        //     exact: true,
        //   },
        //   {
        //     path: '/test/a/c',
        //     name: 'demo',
        //     meta: {
        //       title: 'est/a/c'
        //     },
        //     component: DemoParams,
        //     exact: true,
        //   },
        // ]
      },
      {
        path: '/test/b',
        name: '/test/b',
        meta: {
          title: 'Demo'
        },
        component: Home1,
        exact: true,
      },
    ]
  },
  {
    path: '/testparams',
    name: 'testparams',
    meta: {
      title: 'testparams'
    },
    component: TestDemo1,
    child: [
      {
        path: '/testparams/home',
        name: '/testparams/ho',
        meta: {
          title: 'Demo'
        },
        component: DemoParams,
        exact: true,
      },
      {
        path: '/testparams/:id',
        name: '/testparams/:id',
        meta: {
          title: 'Demo'
        },
        component: DemoParams,
        exact: true,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    meta: {
      title: 'testparams'
    },
    component: Login,
  }
]

export default routerMap
