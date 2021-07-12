import React from 'react';
import './Paginator.css';

const dummyPages = [1,2,3,4,5];

export default function Paginator() {
  return (
    <>
      {dummyPages.map(num => {
        return (
          <button className='paginator nav-button'>{num}</button>
        )
      })}
    </>
  )
}