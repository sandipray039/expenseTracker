import React from 'react';
import Expenses from './Expenses';
import { useGlobalContext } from '../store/Context';

function Transactions() {
  const { state } = useGlobalContext();

  return (
    <div className="mt-10 space-y-4">
      {state.length > 0 ? (
        state.map((val) => (
          <Expenses key={val.id} transaction={val} />
        ))
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
}

export default Transactions; // Ensure this line is present
