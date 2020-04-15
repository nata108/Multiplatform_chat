import React, {Component} from 'react';
import {Login} from "./Login"
import { MobilMain } from './MobilMain';
import {proxy} from "./Proxy";

export default class App extends Component
{
  state = {loggedIn:false,isMobile:false}
  
  checkWidth()
  {
    this.setState({isMobile: window.innerWidth < 650})
  }
  componentDidMount()
  {
    this.checkWidth();
    proxy.addEventListener( "login", () => {this.setState({loggedIn:true}); this.forceUpdate();}, this );
    window.addEventListener("resize", this.checkWidth.bind(this));
  }
  componentWillUnmount()
  {
    proxy.removeAllEventListeners( this );
    window.removeEventListener("resize",this.checkWidth);
  }
  render()
  {
    return(
      <div className="app">
        {this.state.loggedIn?<MobilMain  />:<Login />}
      </div>
    );
    
  }
 
}

