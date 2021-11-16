import Home from '@/modules/HomeDemo/pages/home.jsx'
import Home1 from '@/modules/HomeDemo/pages/home1.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'
import TestDemo1 from '@/modules/TestDemo/pages/test1.jsx'
import DemoParams from '@/modules/TestDemo/pages/test-params'

const routerMap = [
  {
    path: '/test',
    name: 'demo',
    meta: {
      title: 'test'
    },
    component: Demo,
    child: [


      {
        path: '/test/a',
        name: 'demo',
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
        name: 'demo',
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
        name: 'demo',
        meta: {
          title: 'Demo'
        },
        component: DemoParams,
        exact: true,
      },
      {
        path: '/testparams/:id',
        name: 'demo',
        meta: {
          title: 'Demo'
        },
        component: DemoParams,
        exact: true,
      }
    ]
  }
]

export default routerMap
