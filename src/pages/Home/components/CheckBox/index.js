import React from 'react'

export const CheckBox = props => {
    return (
      <li>
          {props.subItens.length > 0 ?
              <>
                <label>{"• " + props.value}</label>
                <ul>
                  {
                    (props.subItens.map(subItem => {
                      return(
                        <li>
                          <input 
                            key={subItem.id} 
                            onClick={props.onChange} 
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
                  key={props.id} 
                  onClick={props.onChange} 
                  type="checkbox" 
                  checked={props.isChecked} 
                  value={props.value} 
                /> 
                <label>{props.value}</label>
              </>
          }
      </li>
    )
}

export default CheckBox