import React, { Component } from 'react'
import './App.css'
import CheckBox from './CheckBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
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

  calculePercetage = () => {
    console.log("calculePercetage");
    let fruites = this.state.fruites;
    let countChecked = 0;

    fruites.forEach(fruite => {

      if (fruite.subItens.length > 0) {
        (fruite.subItens).forEach(subItem => {
          if (subItem.isChecked === true) {
            countChecked = countChecked + (1 / fruite.subItens.length);
            console.log("calculePercetage | subItem | countChecked: ", countChecked);
          }
        }); 

      } else {
        if (fruite.isChecked === true) {
          countChecked = countChecked + 1;
          console.log("calculePercetage | item | countChecked: ", countChecked);
         }
      }


    })
    let percentage = (countChecked*100)/fruites.length;
    console.log("calculePercetage | percentage: ", percentage);
    this.setState({percentage})
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
    this.calculePercetage();
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
    this.calculePercetage();
  }

  render() {
    return (
      <div className="App">
        <h1> Check Example </h1>
          percentage: {this.state.percentage}
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
