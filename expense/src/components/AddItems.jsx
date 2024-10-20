
    import React, { useState } from "react";
    import { useGlobalContext } from "../store/Context";

function AddItems({budget,setbudget,see,setbal}) {
  const { dispatch } = useGlobalContext();

  const [item, setItem] = useState({
    name: "",
    amount: "",
    id: Math.random() * 1000,
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the new item to the global context
    dispatch({
      type: "ADD_TRANSACTION", // Make sure to define this action in your reducer
      payload: item, // Pass the new item as the payload
    });

    // chnaging the value of balance

    setbal((prevBal) => prevBal - item.amount);
    // Reset the item state
    setItem({ name: "", amount: "", id: Math.random() * 1000 });
  };

  const handleOnChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const handlebudgetchange = (e) => {
    setbudget(e.target.value);
  };

  const handleButton=(event)=>{
    event.preventDefault();
    console.log(budget);
    see(budget);
     setbudget('');

  }
  return (
    <div className="mt-10 flex justify-between">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block font-semibold">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          value={item.name}
          onChange={handleOnChange}
          className="border-2 border-black rounded-md"
          placeholder="Enter Item Name"
        />
        <label htmlFor="amount" className="block font-semibold">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={item.amount}
          onChange={handleOnChange}
          className="border-2 border-black rounded-md block mb-3"
          placeholder="Enter Item Cost"
        />
        <button type="submit" className="bg-green-400 rounded-md px-3 py-2">
          Add Item
        </button>
      </form>

      <form>
        <label htmlFor="budget" className="block font-semibold">
          Add Budget
        </label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handlebudgetchange}
          className="border-2 border-black rounded-md block mb-3"
          placeholder=""
        />
        <button onClick={handleButton} type="submit" className="bg-green-400 rounded-md px-3 py-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItems;

   