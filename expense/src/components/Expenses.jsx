import React from 'react'

function Expenses({transaction}) {
  return (
    <div className='w-full border border-slate-400 rounded-md px-2 py-1 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1'>
      <p className="text-sm">{transaction.name}</p>
      <p className="text-sm sm:mt-0 mt-1">Expenses:{transaction.amount}</p>
    </div>
  )
}

export default Expenses;
