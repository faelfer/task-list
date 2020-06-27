import React, { Component } from 'react'
import './App.css'
import CheckBox from './CheckBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        {
          id: 1, 
          value: "banana", 
          isChecked: false,
          subItens: []
        },
        {
          id: 2, 
          value: "apple", 
          isChecked: false,
          subItens: []
        },
        {
          id: 3, 
          value: "mango", 
          isChecked: false,
          subItens: []
        },
        {
          id: 4, 
          value: "orange", 
          isChecked: false,
          subItens: [
            {
              id: 3, 
              value: "Strawberry", 
              isChecked: false
            },
            {
              id: 3, 
              value: "pineapple", 
              isChecked: false
            }
          ]
        }
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
    this.setState({fruites: fruites})
  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
      console.log("handleCheckChieldElement | fruite: ", fruite);
      console.log("handleCheckChieldElement | fruite.value: ", fruite.value);
      console.log("handleCheckChieldElement | event.target.value: ", event.target.value);
       if (fruite.value === event.target.value)
          fruite.isChecked = event.target.checked
    })
    this.setState({fruites: fruites})
  }

  handleCheckSubitem = (event) => {
    console.log("handleCheckSubitem");
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
      console.log("handleCheckSubitem | fruite: ", fruite);
      console.log("handleCheckSubitem | fruite.value: ", fruite.value);
      console.log("handleCheckSubitem | event.target.value: ", event.target.value);

      (fruite.subItens).forEach(subItem => {
        console.log("handleCheckSubitem | subItem: ", subItem);
        console.log("handleCheckSubitem | subItem.value: ", subItem.value);
        console.log("handleCheckSubitem | event.target.value: ", event.target.value);
         if (subItem.value === event.target.value)
            subItem.isChecked = event.target.checked
      })

    })
    this.setState({fruites: fruites})
  }

  render() {
    return (
      <div className="App">
        <h1> Check and Uncheck All Example </h1>
        <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" />
          Check / Uncheck All
        <ul>
          {
            this.state.fruites.map((fruite, key) => {
              return (
                <CheckBox 
                  handleCheckChieldElement={this.handleCheckChieldElement}
                  handleCheckSubitem={this.handleCheckSubitem}  
                  {...fruite} 
                  key={key}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App
