import  React from 'react';
import './form-input.styles.css';
import { label } from 'joi/lib/types/alternatives';

const FormInput = ({HandleChange, label, ...otherProps}) => {
    return(
        <div className='group'>
            <input 
              className='form-input'
              {...otherProps}
      />
        {
            label ?
            (< label className={`${otherProps.values.length ? 'shrink' : ''}form-input-label`}>

            </label>)
            :null
        }
          </div>
            )
        }
    
        export default FormInput