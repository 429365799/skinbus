import Home from './Home/Home'
import CsGo from './CSGO/Csgo'
import Doc from './Doc/Doc'

const pages = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/csgo',
        component: CsGo,
    },
    {
        path: '/doc',
        component: Doc,
    },
]

export default pages
