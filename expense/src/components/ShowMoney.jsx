import React, { useState } from 'react'

function ShowMoney({budget,bal}) {
    
  return (
    <div className='mt-10 w-full'>
        <h1>Balance:{bal}</h1>
        <div className='flex justify-between'>
        <span>Expense:</span>
        <span className='w-[30%]'>Budget:{budget}</span>
        </div>
    </div>
  )
}

export default ShowMoney