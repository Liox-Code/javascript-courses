import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo/Index'
import { NavBar } from './components/NavBar/index'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'

import { Route, Switch, Redirect } from 'react-router-dom'

const Favs = React.lazy(() => import('./pages/Favs').then(module => ({ default: module.Favs })))

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pet/:id' component={Home} />
        <Route exact path='/detail/:detailId' component={Detail} />
        {!isAuth && <Route exact path='/login' component={NotRegisteredUser} />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Route exact path='/favs' component={Favs} />
        <Route exact path='/user' component={User} />
        <Route component={NotFound} key='Error 404' />
      </Switch>
      <NavBar />
    </Suspense>
  )
}

export default App
