import React,{Component} from "react"

import Home from "./compontent/home.js"
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
export default App