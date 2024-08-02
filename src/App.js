import Cards from './components/Cards'
import { useState } from 'react';
import data from './data'
function App(){
  const [tours,setTours] = useState(data);
  function inoInterest(id){
    const newTours =tours.filter((data)=> data.id !== id);
    setTours(newTours); 
  }

  function interest(id){
    const interest = tours.filter((data)=>data.id === id);
    setTours(interest)
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <p>No Data Found</p>
        <button onClick={()=>setTours(data)} className='btn-white'>Refersh</button>
      </div>
    )
  }
  return(
      <div className='App'>
        <Cards tours={tours} interest={interest} inoInterest={inoInterest}></Cards>
      </div>
  )
}
export default App;