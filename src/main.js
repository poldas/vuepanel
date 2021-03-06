import config from './config'
import init from './init'
init(config)

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import './transitions'

Vue.use(Router)
Vue.use(Resource)

import App from './App'

const { sidebar } = config
const router = new Router({
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass: 'is-active'
})

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})

router.beforeEach(({ next }) => {
  NProgress.start()
  if (sidebar.isMobile && sidebar.opened) {
    sidebar.opened = false
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
let componentPath = './components/'
import Dashboard from "./components/pages/Dashboard/"
import Analiza from "./components/pages/Analiza/"
import NewAnaliza from "./components/pages/NewAnaliza/"

const lazyLoading = (path, ext = '.vue') => {
    return (resolve) => {
        require([`${path}${ext}`], resolve)
    }
}
router.map({
    // '/login': {
    //   name: 'Login',
    //   component: Login
    // },
    '/dashboard': {
        name: 'Dashboard',
        component: Dashboard
    },
    '/analiza': {
        name: 'Analiza',
        component: Analiza
    },
    '/newanaliza': {
        name: 'NewAnaliza',
        component: NewAnaliza
    },
    // http://router.vuejs.org/en/lazy.html
    '/charts/chartJs': {
        name: 'ChartJs',
        component: lazyLoading(componentPath + 'pages/Charts/ChartJs')
    },
    '/charts/chartist': {
        name: 'Chartist',
        component: lazyLoading(componentPath + 'pages/Charts/Chartist')
    },
    '/charts/peity': {
        name: 'Peity',
        component: lazyLoading(componentPath + 'pages/Charts/Peity')
    },
    '/charts/plotly': {
        name: 'Plotly',
        component: lazyLoading(componentPath + 'pages/Charts/Plotly')
    },
    '/ui': {
        name: 'UI',
        component: lazyLoading(componentPath + 'pages/UI/index'),
        subRoutes: {
            '/typography': {
                name: 'Typography',
                component: lazyLoading(componentPath + 'pages/UI/Typography')
            },
            '/buttons': {
                name: 'Buttons',
                component: lazyLoading(componentPath + 'pages/UI/Buttons')
            },
            '/icons': {
                name: 'Icons',
                component: lazyLoading(componentPath + 'pages/UI/Icons')
            },
            '/form': {
                name: 'Form',
                component: lazyLoading(componentPath + 'pages/UI/Form')
            }
        }
    },
    '/components': {
        name: 'Components',
        component: lazyLoading(componentPath + 'pages/Components/index'),
        subRoutes: {
            '/backtotop': {
                name: 'BackToTop',
                component: lazyLoading(componentPath + 'pages/Components/BackToTop')
            },
            '/collapse': {
                name: 'Collapse',
                component: lazyLoading(componentPath + 'pages/Components/Collapse')
            },
            '/datepicker': {
                name: 'Datepicker',
                component: lazyLoading(componentPath + 'pages/Components/Datepicker')
            },
            '/message': {
                name: 'Message',
                component: lazyLoading(componentPath + 'pages/Components/Message')
            },
            '/modal': {
                name: 'Modal',
                component: lazyLoading(componentPath + 'pages/Components/Modal')
            },
            '/notification': {
                name: 'Notification',
                component: lazyLoading(componentPath + 'pages/Components/Notification')
            },
            '/progress': {
                name: 'Progress',
                component: lazyLoading(componentPath + 'pages/Components/Progress')
            },
            '/rating': {
                name: 'Rating',
                component: lazyLoading(componentPath + 'pages/Components/Rating')
            },
            '/slider': {
                name: 'Slider',
                component: lazyLoading(componentPath + 'pages/Components/Slider')
            },
            '/switch': {
                name: 'Switch',
                component: lazyLoading(componentPath + 'pages/Components/Switch')
            },
            '/tabs': {
                name: 'Tabs',
                component: lazyLoading(componentPath + 'pages/Components/Tabs')
            },
            '/tooltip': {
                name: 'Tooltip',
                component: lazyLoading(componentPath + 'pages/Components/Tooltip')
            }
        }
    },
    '/tables/basic': {
        name: 'BasicTables',
        component: lazyLoading(componentPath + 'pages/Tables/Basic')
    },
    '/tables/handsontable': {
        name: 'Handsontable',
        component: lazyLoading(componentPath + 'pages/Tables/Handsontable')
    }
})

router.redirect({
  '/ui': '/ui/typography',
  '*': '/dashboard'
})

router.start(App, 'app')
