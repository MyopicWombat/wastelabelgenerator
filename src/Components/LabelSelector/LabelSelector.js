import React from 'react';
import SavedLabel from '../SavedLabel/SavedLabel';
import './LabelSelector.css';

export default function LabelSelector() {
  return (
    <div className='label-selector'>
      <SavedLabel className='saved-label'/>
      <SavedLabel className='saved-label'/>
      <SavedLabel className='saved-label'/>
      <div className='saved-label'>+</div>
    </div>
  )
}