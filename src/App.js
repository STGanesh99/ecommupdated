import React,{useEffect,useState,createContext} from 'react';
import './App.css';
import Nav from "./nav"
import Dropdown from "./dropdown"
import Carousel from "./carousel"
import Card from './card'
export const Objdetails = React.createContext()
export const Cart = React.createContext()
function  App(props) {
 
 let [ctg,setctg] = useState(null)
 let [data,setdata] = useState([])
 let [items,setitems] = useState(0);
 
 useEffect(()=>{
   if(props.data==="electronics.json"){
     setctg("Electronics")
   }
   else if(props.data==="menclothing.json"){
     setctg("Men's Clothing")
   }
   else if(props.data==="womenclothing.json"){
     setctg("Women's Clothing")
   }
   else if(props.data==="jewellery.json"){
    setctg("Jewellery")
  }
  else{
    setctg("Choose...")
  }
  fetch(props.data
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      setdata(myJson)
    });   
      var a = JSON.parse(sessionStorage.getItem("items"))
      if(a!=null)
      {  
        if(a.length!=0){
         setitems(a.length)
         }
         else{
          sessionStorage.setItem("tp",0)
         }
      }
      else{
      sessionStorage.setItem("tp",0)
      }                 
  },[items])
  return (
    <>
     <Cart.Provider value= {{
                    items:items,
                    setitems:(n)=>setitems(n)}}>
    <Nav items = {items}/>
    {console.log(items)}
    <Dropdown ctg = {ctg}/>
    {console.log(data)}
    <div className="outer">
    <div className="cards">
    {data.map((obj)=>{
      return(
       <Objdetails.Provider value={{img:obj.image,
       price:obj.price,
       title:obj.title,
       ctg:obj.category,
       descr:obj.description
       }}>
       <Card img={obj.image} price = {obj.price} title = {obj.title} ctg = {obj.category}/>
       </Objdetails.Provider>
    )})}
    </div>
    </div>
    
    <Carousel/>
    </Cart.Provider>
    </>
  );
}

export default App;
