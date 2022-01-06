import HomePage from './pages/Home'
import DocumentationPage from './pages/DocumentationPage'

let routes = [
  {
    path: '/',
    component: HomePage,
    meta: { auth: false },
  },
  {
    path: '/page/:type',
    component: DocumentationPage,
    meta: { auth: false },
  },
]

export default routes
