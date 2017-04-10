import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, hashHistory, Router} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import {Provider} from 'react-redux';
import App from '../container/App';
import Page1 from '../components/page1';
import Page2 from '../components/page2';;
import configureStore from '../stores';
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/"  component={App}>
                <IndexRoute component={Page1}/>
               <Route path="Page2" component={Page2}/>
            </Route>
        </Router>
   </Provider>,
 document.getElementById("app"))

