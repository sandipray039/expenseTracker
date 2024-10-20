import React, { useState } from 'react'
import Header from './components/Header'
import Transactions from './components/Transactions'
import ShowMoney from './components/ShowMoney'
import AddItems from './components/AddItems'
import Provide from './store/Context'

function App() {
  const [budget,setbudget] = useState('');
  const [show,setshow]=useState('');

  const [bal,setbal]=useState('');
 

  const balshow=()=>{
    
  }

  const see=(val)=>{
    setshow(val);
    setbal(val);
  }

  return (
  <Provide>
      <div className='w-full h-fit p-16 flex flex-col  items-center '>
     <div className='w-[60%] border-2 border-black rounded-md p-10'>  
     <Header />
      <ShowMoney budget={show} bal={bal}/>
      <AddItems setbal={setbal} budget={budget} setbudget={setbudget} see={see} />
      <Transactions/>
     </div>
    </div>
  </Provide>
  )
}

export default App