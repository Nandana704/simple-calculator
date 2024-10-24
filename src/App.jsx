import React, { useState } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'


function App() {
  const [principle, setprinciple] = useState("")
  const[Rate,setRate]=useState("")
  const[Year,setYear]=useState("")
  const[interest,setInterest]=useState(0)
  const[isPrincipleInputValid,setIsPrincipleInputValid]=useState(false)
  const[isYearInputValid,setIsYearInputValid]=useState(false)
  const[isRateInputValid,setIsRateInputValid]=useState(false)
  
const handleValidation=(tag)=>{

  const{name,value}=tag
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  
if (!!value.match(/^\d*.?\d+$/)) {
  //valid
  if (name=="principle") {
    setprinciple(value)
    setIsPrincipleInputValid(false)
  }else if(name=="year"){
    setYear(value)
    setIsYearInputValid(false)
  }else{
    setRate(value)
    setIsRateInputValid(false)
  }
} else {
  //invalid
  if (name=="principle") {
    setprinciple(value)
    setIsPrincipleInputValid(true)
  }else if(name=="year"){
    setYear(value)
    setIsYearInputValid(true)
  }else{
    setRate(value)
    setIsRateInputValid(true)
  }

}
}
  const handleclaculate=(e)=>{

    e.preventDefault()
    setInterest((principle*Rate*Year)/100)
  
}

const handleReset=()=>{
  setPrinciple("")
  setYear("")
  setRate("")
  setInterest("")
  setIsPrincipleInputValid("false")
    setIsYearInputValid("false")
    setIsRateInputValid("false")

}
    
  
  
  return (
    <>

      <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-primary'>
      <div className="box bg-info p-5 rounded">
        <h2 className='text-danger fw-bolder' style={{textDecoration:'underline'}}>Simple-Interest-Calculator</h2>
        <p className='text-center'>Calculate our simple interest with us</p>
        <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
          <h1 className='text-danger'>&#8377;{interest}</h1>
        </div>
        <div className="mt-5">
          <div className="border rounded p-3 d-flex flex-column p-3">
              <TextField id="Principle" name='principle' value={principle} label="Principle Amount" variant="outlined" onChange={e=>handleValidation(e.target)} />
                {isPrincipleInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
              <TextField id="Year" name='year' value={Year} label="Year" variant="filled" onChange={e=>handleValidation(e.target)} />
              {isYearInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
              <TextField id="rate" name='rate' value={Rate} label="Rate of Interest" variant="standard" onChange={e=>handleValidation(e.target)} /> 
              {isRateInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
                </div>
                <div className="mt-3 d-flex justify-content-between">
                
                <Button variant="contained" type='submit' onClick={handleclaculate}>Calculate</Button>
                <Button variant="outlined" onClick={handleReset}>Reset</Button>
                </div>
             </div>
         </div>
      </div>

    </>

  )
}

export default App
