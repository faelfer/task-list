import React from 'react'

export const CheckBox = props => {
    return (
      <li>
        <input 
          key={props.id} 
          onClick={props.handleCheckChieldElement} 
          type="checkbox" 
          checked={props.isChecked} 
          value={props.value} 
        /> 
          {props.value} 
        
          {props.subItens.length > 0 ?
              <ul>
                {
                  (props.subItens.map(subItem => {
                    return(
                      <li>
                      <input 
                        key={subItem.id} 
                        // onClick={subItem.handleCheckChieldElement} 
                        type="checkbox" 
                        checked={subItem.isChecked} 
                        value={subItem.value} 
                      /> 
                      {subItem.value} 
                    </li>
                    )
                  }))
                }
              </ul>
            :
              null
          }
      </li>
    )
}

export default CheckBox