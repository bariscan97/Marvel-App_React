import './App.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"
import logo from './marvel.png';
import Modal from './comps/Modal';



function App() {
  
  const[api,setapi]=useState([])
  const[value,setvalue]=useState("")
  const[search,setsearch]=useState([])
  
  
  const hash="36a5562a803b18c9a73f29639b48da14"
  
  useEffect(()=>{
    const funcm=async()=>{
      if (value===""){
        const veriler= await axios.get(`https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=f72870cf78c34abf28a7a5efcb782b7b&hash=${hash}`)
        console.log(veriler.data.data.results)
        setapi(veriler.data.data.results)
      }
      else{
        const veriler= await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&ts=1&apikey=f72870cf78c34abf28a7a5efcb782b7b&hash=${hash}`)
        console.log(veriler.data.data.results)
        setapi(veriler.data.data.results)
      }
    }
    funcm()
  
  },[value])
  
  const query=(e)=>{
    setvalue(e.target.value.trim())
  }
  

  

  return (
  <div className='screen'>
    
    
    <img className='marvel' src={logo}/>
    
    <div className='search-box'>
        <form className='Form'>
                <input onChange={(e)=>query(e)} type="text"   placeholder="search"/>
                <button type="reset"><i className="fas fa-search"></i></button>
        </form>
    </div>
    <div className='container'>
    
        <div  className='boxs'> 
          {  api.map((item)=>(
           
            <div  key={item.id}>
               
              <img  onClick={()=>setsearch([`${item.thumbnail.path}/portrait_fantastic.jpg`,item.name,item.description])}  data-target=  ".bd-example-modal-sm"  data-toggle="modal"
              
              className='shadow' width="280"src={`${item.thumbnail.path}/portrait_fantastic.jpg`} alt='' />
              

            </div>
            
          )) }
          {search.length===3 &&  <Modal  img={search[0]}   name={search[1]} des={search[2]}  /> }
        </div>
    </div>
    </div>

      
    
      
      
  
    
    );
}

export default App;
