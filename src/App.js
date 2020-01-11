import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import "./App.css";

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      else{
        setCurrentUser({userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }  
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
