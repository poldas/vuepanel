var path = require('path')
const componentPath = './components/'
import Dashboard from "../components/pages/Dashboard/"
import Analiza from "../components/pages/Analiza/"
import NewAnaliza from "../components/pages/NewAnaliza/"

const lazyLoading = (path, ext = '.vue') => {
    console.log(path)
    return (resolve) => {
        require([`${path}${ext}`], resolve)
    }
}

export default {
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
}