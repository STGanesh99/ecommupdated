import React,{useState,useContext,useEffect} from 'react'
import { Cart } from './App';
import Modal from "./Modal"


const Card = (props)=>{


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [added,setadded] = useState(false);
  const context = useContext(Cart);


  useEffect(()=>{
      var arr = JSON.parse(sessionStorage.getItem("items"));
      if(arr!=null){
        arr.map((str)=>{
          var obj = JSON.parse(str);
          if(obj.title==props.title){
            setadded(true);
          }
        })
      } 
  },[])


  const handlechange = ()=>{
    if(!added){
      var bool  = JSON.parse(sessionStorage.getItem("items"));
      var obj = { 
        title:props.title,
        img:props.img,
        ctg:props.ctg,
        price:props.price,
        descr:props.descr,
        qty:1
      }
        if(bool==null){
        var brr = []
          brr.push(JSON.stringify(
            obj
           ))
           sessionStorage.setItem("items",JSON.stringify(brr))
        }
        else{
          bool.push(JSON.stringify(
            obj
           ))
           sessionStorage.setItem("items",JSON.stringify(bool)) 
        }
        context.setitems(context.items+1)
        var tp = Number(sessionStorage.getItem("tp"))
        sessionStorage.setItem("tp",tp+obj.price)
      }
     
    setadded(true);
  }
    return(
    <div className="card" style={{width: "20rem",height:"30rem",alignItems:"center",textAlign:"center"}}>
    <p style = {{color:"black",margin:"0 25px",marginTop:"10px"}}>{props.title}</p>
    <img className="card-img-top"  src = {props.img}  style = {{width:"10rem",height:"10rem",marginTop:"30px"}} alt="Card image cap"/>
    <div className="card-body">
    <div style={{color:"black",backgroundColor:"#FFDF00",margin:"0 80px",borderRadius:"20%"}} className="category">
    <p>#{props.ctg}</p>
    </div>
    <p style={{color:"black",fontSize:"25px"}}>{props.price}$</p>
    <button type="button" className="btn btn-warning cardbtn" onClick={handlechange}>Add to Cart</button>
    <button type="button" className="btn btn-info cardbtn" onClick={()=>handleShow(true)}>Description</button>
    <Modal show={show} close={()=>handleClose(true)}/>
    </div>
  </div>
  
  )
 
}

export default Card