import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import { useSelector, useDispatch } from 'react-redux'
import Main from './layout/Main/Main'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

// components
import LoginModal from './components/LoginModal'

import pages from './pages'
import "./App.less";

const toastIds = new Set()

function App() {
  const { addToast, removeToast, removeAllToasts } = useToasts()
  const showLogin = useSelector(state => state.user.showLogin)
  const dispatch = useDispatch()

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

  const setShowLogin = (visible) => {
      dispatch({ type: 'toggleShowLogin', visible })
  }
  window.APP.showLogin = () => setShowLogin(true)
  window.APP.hideLogin = () => setShowLogin(false)

  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          {
            pages.map((page, index) => (
              <Route path={page.path} key={index} component={page.component}/>
            ))
          }
          <Redirect from="/" to="/home"/>
        </Switch>
      </Main>
      <Footer />

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  )
}

export default App;
