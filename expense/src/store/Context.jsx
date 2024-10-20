import { createContext, useContext, useReducer } from "react";

// Create the context
export const Contextor = createContext();

const initialState = []; // Define your initial state here
const reducer = (state, action) => {
  switch (action.type) {
    // Define your action cases
    case "ADD_TRANSACTION":
      return [...state, action.payload]; // Add a new todo
   // Delete a todo by id
    // Add more action cases as needed
    //...
    default:
      return state; // Return the current state by default
  }
};

// Provider component
const Provide = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Contextor.Provider value={{ state, dispatch }}>
      {children}
    </Contextor.Provider>
  );
};

// Custom hook for using the context
export const useGlobalContext = () => {
  return useContext(Contextor);
};

export default Provide;
