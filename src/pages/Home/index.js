import React, { useState } from 'react'
import './styles.css'
import CheckBox from './components/CheckBox';

function App() {

  const [percentage, setPercentage] = useState(0);
  const [items, setItems] = useState([]);

  function calculePercetage() {
    console.log("calculePercetage");
    let itemsManipulated = items
    let countChecked = 0;

    itemsManipulated.forEach(item => {

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
    let percentage = (countChecked*100)/itemsManipulated.length;
    console.log("calculePercetage | percentage: ", percentage);
    setPercentage(percentage)
  }

  function check(index, isCheck) {
    console.log("handleCheckSubitem");
    let itemsManipulated = items
    itemsManipulated[index].isChecked = !isCheck;

    setItems(itemsManipulated)
    calculePercetage();
  }

  function subCheck(index, subIndex, isCheck) {
    console.log("handleCheckSubitem");
    let itemsManipulated = items
    itemsManipulated[index].subItens[subIndex].isChecked = !isCheck;

    setItems(itemsManipulated)
    calculePercetage();
  }

    return (
      <div className="App">
        <h1> Check List </h1>
        Completed: {Math.round(percentage)}%
        <ul>
          {
            items.map((item, index) => {
              return (
                <CheckBox 
                  onCheck={(index, isCheck) => check(index, isCheck)}
                  onSubCheck={(index, subIndex, isCheck) => subCheck(index, subIndex, isCheck)}
                  item={item} 
                  index={index}
                />
              )
            })
          }
        </ul>
      </div>
    );
}

export default App
