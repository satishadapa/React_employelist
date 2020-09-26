import React from 'react';
import Main from './Main';
import data from "./services/employerslist"
console.log("fke=",data)
const HomePage = () => (
  <Main>
    {

     data.length &&   data.map((employe ,key)=>{
        console.log("ss",employe)
        return(
          <div key={key} className="ui massive vertical divided list">
          <div className="item">
            <img className="ui avatar image" src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
            <div className="content">
              <div className="header">{employe.id}</div>
              Name:{employe.name} 
            </div>
            <div className="content">
             mail: {employe.email} 
            </div>
            <div className="content">
              age:{employe.age} 
            </div>
            <div className="content">
              phone:{employe.phoneNo} 
            </div>
          </div>
        </div>
        )
      })
    } 
 

  </Main>
)

export default HomePage;