import { Switch, Route, Redirect } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import Main from './layout/Main/Main'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

// components
// import Toast from './components/Toast/toast'

import pages from './pages'
import "./App.less";

const toastIds = new Set()

function App() {
  const { addToast, removeToast, removeAllToasts } = useToasts();

  window.APP.toast = {
    show(content, options = {}) {
      const toastId = ~~(Math.random() * 10000)
      const settings = {
        id: toastId,
        autoDismissTimeout: 1000,
        autoDismiss: true,
        placement: 'top-center',
        ...options
      }
      toastIds.add(toastId)
      addToast(content, settings)
      return toastId
    },
    hide(id) {
      if (id != null) {
        removeToast(id)
      } else {
        removeAllToasts()
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          {
            pages.map((page, index) => (
              <Route path={page.path} key={index} component={page.component}></Route>
            ))
          }
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </Main>
      <Footer />
    </div>
  )
}

export default App;
