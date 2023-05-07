import React from 'react'
import { RadioProps } from '../types'

const RadioButton = (props: RadioProps) => {
  const { change, selected } = props;

  return (
    <div className='flex'>
      <label className='mr-6'>
        <input name="type" type='radio' value='quickApply' checked={selected === 'quickApply'} onChange={change} /> Quick Apply
      </label>
      <label>
        <input name="type" type='radio' value='externalApply' checked={selected === 'externalApply'} onChange={change} /> External Apply
      </label>
    </div>
  )
}

export default RadioButton
