import DocumentationPage from './pages/DocumentationPage'

let routes = [
  {
    path: '/',
    component: DocumentationPage,
    meta: { auth: false },
  },
  {
    path: '/page/:type',
    component: DocumentationPage,
    meta: { auth: false },
  },
]

export default routes
