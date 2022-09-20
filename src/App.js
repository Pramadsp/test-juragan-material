import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import { sessionToken,sessionRole, sessionAccount, sessionForm } from './redux/actions/session';
import axios from 'axios';

//components
import Navbar from './components/headerComponent/navbar';
// import FundraiserProgress from './components/headerComponent/fundraiserProgress';
import Footer from './components/footerComponent/footer';
import Loading from './components/pages/parts/loading';

//pages
import Homepage from './components/pages/homepage/index'
import { showLoading } from 'redux/actions/loading';
import Page404 from 'components/pages/page404';

class App extends Component{  
  constructor(props){
    super(props)

    this.PropTypes = {
      store: PropTypes.object.isRequired
    }

    this.generalModalRef = React.createRef();
    this.modalChangePasswordRef = React.createRef();
    this.modalAgreementFundraiserRef = React.createRef();
    this.modalInvestorTypeRef = React.createRef();
    this.modalLoginRef = React.createRef()

    this.store = this.props.store;

    // this.subscribe = initSubscriber(this.store)
  }

  componentWillMount = () => {
    this.props.store.dispatch(showLoading(false))
  }

  logout = async () => {
      let store = this.props.store;

      store.dispatch(sessionToken(null));
      store.dispatch(sessionRole(null));
      store.dispatch(sessionAccount(null));
      store.dispatch(sessionForm(null));
      window.location.href = '/'
  }

  showInvestorType = () =>{
    this.modalInvestorTypeRef.current.handleShow()
  }

  render(){
    const url = window.location.pathname 
    let isNoHeaderFooter = false

    return (
        <React.Fragment>
          <Loading store={this.props.store}/>          
          <Provider store={this.props.store}>
            <Router>
              <div className={`App dx-swatch-likuid-bo ${isNoHeaderFooter ? 'd-none' : ''}`}>
              <Navbar 
                store={this.props.store} 
                logout={(e) => {this.logout(e)}} 
                retrieveDataWallet={this.retrieveDataWallet}
              />
              <Switch>
                <Route exact path="/" component={(props) => <Homepage {...props} store={this.props.store} />}/>
                <Route component={Page404} />
              </Switch>
              <Footer store={this.props.store}/>
              </div>
            </Router>
          </Provider>
        </React.Fragment>
    );
  }
}

export default App;
