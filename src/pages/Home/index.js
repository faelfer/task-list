import React, { useState } from 'react'
import './styles.css'
import CheckBox from './components/CheckBox';

function App() {

  const [percentage, setPercentage] = useState(0);
  const [items, setItems] = useState([
    {
      id: 0, 
      value: "Teste", 
      isChecked: false,
      subItens: []
    },
    {
      id: 1, 
      value: "Água", 
      isChecked: false,
      subItens: [
                  {
                      value: "08:00 (1)", 
                      isChecked: false
                  },
                  {
                      value: "09:00 (2)", 
                      isChecked: false
                  },
                  {
                      value: "10:00 (3 | 600ml)", 
                      isChecked: false
                  },
                  {
                      value: "11:00 (4)", 
                      isChecked: false
                  },
                  {
                      value: "12:00 (5)", 
                      isChecked: false
                  },
                  {
                      value: "13:00 (6 | 600ml)", 
                      isChecked: false
                  },
                  {
                      value: "14:00 (7)", 
                      isChecked: false
                  },
                  {
                      value: "15:00 (8)", 
                      isChecked: false
                  },
                  {
                      value: "16:00 (9 | 600ml)", 
                      isChecked: false
                  },
                  {
                      value: "17:00 (10 | 200ml)", 
                      isChecked: false
                  },
                ]
              },
              {
                id: 2, 
                value: "Escovar os dentes", 
                isChecked: false,
                subItens: [
                  {
                      value: "café da manhã", 
                      isChecked: false
                  },
                  {
                      value: "almoço", 
                      isChecked: false
                  },
                  {
                      value: "jantar", 
                      isChecked: false
                  },
                ]
              },
              {
                id: 3, 
                value: "Banho", 
                isChecked: false,
                subItens: [
                  {
                      value: "manhã", 
                      isChecked: false
                  },
                  {
                      value: "noite", 
                      isChecked: false
                  },
                ]
              },
              {
                id: 4, 
                value: "Protetor labial", 
                isChecked: false,
                subItens: [
                  {
                    value: "08:00", 
                    isChecked: false
                  },
                  {
                    value: "12:00", 
                    isChecked: false
                  },
                  {
                      value: "16:00", 
                      isChecked: false
                  },
                  {
                      value: "20:00", 
                      isChecked: false
                  },
                  {
                      value: "00:00", 
                      isChecked: false
                  },
                ]
              },
              {
                  id: 5, 
                  value: "Hidratante ", 
                  isChecked: false,
                  subItens: [
                    {
                        value: "manhã", 
                        isChecked: false
                    },
                    {
                        value: "noite", 
                        isChecked: false
                    },
                  ]
              },
              {
                  id: 6, 
                  value: "Limpar rosto", 
                  isChecked: false,
                  subItens: [
                    {
                        value: "manhã", 
                        isChecked: false
                    },
                    {
                        value: "noite", 
                        isChecked: false
                    },
                  ]
              },
            ])

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
