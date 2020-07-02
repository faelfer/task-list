import React from 'react';

export default function CheckBox({ onCheck, onSubCheck, item, index }) {
    return (
      <li>
          {item.subItens.length > 0 ?
              <>
                <label>{"• " + item.value}</label>
                <ul>
                  {
                    (item.subItens.map((subItem, subIndex) => {
                      return(
                        <li>
                          <input 
                            key={subItem.id} 
                            onClick={() => onSubCheck(index, subIndex, subItem.isChecked)} 
                            type="checkbox" 
                            checked={subItem.isChecked} 
                            value={subItem.value} 
                          /> 
                          {subItem.value} 
                        </li>
                      )
                    })
                    )
                  }
                </ul>
              </>
            :
              <>
                <input 
                  key={item.id} 
                  onClick={() => onCheck(index, item.isChecked)} 
                  type="checkbox" 
                  checked={item.isChecked} 
                  value={item.value} 
                /> 
                <label>{item.value}</label>
              </>
          }
      </li>
    )
}
