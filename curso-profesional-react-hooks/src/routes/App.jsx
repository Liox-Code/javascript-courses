import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//componenets
import Home from '../components/Home';
import Checkout from '../components/Checkout';
import Information from '../components/Information';
import Payment from '../components/Payment';
import Succes from '../components/Succes';
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/checkout/information" component={Information}/>
                        <Route exact path="/checkout/payment" component={Payment}/>
                        <Route exact path="/checkout/succes" component={Succes}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;
