import React, { Component } from 'react'
import './styles.css'
import CheckBox from './components/CheckBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
      items: [
        {
          id: 1, 
          value: "water", 
          isChecked: false,
          subItens: [
            {
              id: 11, 
              value: "08:00 (1)", 
              isChecked: false
            },
            {
              id: 11, 
              value: "09:00 (2)", 
              isChecked: false
            },
          ]
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

  calculePercetage = () => {
    console.log("calculePercetage");
    let items = this.state.items;
    let countChecked = 0;

    items.forEach(item => {

      if (item.subItens.length > 0) {
        (item.subItens).forEach(subItem => {
          if (subItem.isChecked === true) {
            countChecked = countChecked + (1 / item.subItens.length);
            console.log("calculePercetage | subItem | countChecked: ", countChecked);
          }
        }); 

      } else {
        if (item.isChecked === true) {
          countChecked = countChecked + 1;
          console.log("calculePercetage | item | countChecked: ", countChecked);
         }
      }


    })
    let percentage = (countChecked*100)/items.length;
    console.log("calculePercetage | percentage: ", percentage);
    this.setState({percentage})
  }

  handleCheck = (event) => {
    console.log("handleCheckSubitem");
    let items = this.state.items
    items.forEach(item => {
      console.log("handleCheckSubitem | item: ", item);
      console.log("handleCheckSubitem | item.value: ", item.value);
      console.log("handleCheckSubitem | event.target.value: ", event.target.value);

      if (item.subItens.length > 0) {
        (item.subItens).forEach(subItem => {
          console.log("handleCheckSubitem | subItem: ", subItem);
          console.log("handleCheckSubitem | subItem.value: ", subItem.value);
          console.log("handleCheckSubitem | event.target.value: ", event.target.value);
           if (subItem.value === event.target.value)
              subItem.isChecked = event.target.checked
        });

      } else {
        if (item.value === event.target.value) {
          item.isChecked = event.target.checked
        }

      }

    })
    this.setState({items: items})
    this.calculePercetage();
  }

  render() {
    return (
      <div className="App">
        <h1> Check Example </h1>
          Percentage: {this.state.percentage}
        <ul>
          {
            this.state.items.map((item, key) => {
              return (
                <CheckBox 
                  onChange={this.handleCheck}
                  {...item} 
                  key={item.id}
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
