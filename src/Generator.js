import React,{useContext} from "react"
import {Button} from "react-bootstrap"




const Generator = (props)=>{
 const increment = ()=>{
     props.setcount(props.count+1);
     var tp = Number(sessionStorage.getItem("tp"))
     var arr = JSON.parse(sessionStorage.getItem("items"))
    if (arr != null) {
        const brr = []
      arr.map((str) => {
        var obj = JSON.parse(str);
        if (obj.title == props.title) {
             var a = Number(obj.qty) + 1
             var newobj = {
                 ...obj,
                 qty:a
             }
             brr.push(JSON.stringify(newobj))
        }
        else{
        brr.push(JSON.stringify(obj));
        }
      })
      sessionStorage.setItem("items",JSON.stringify(brr))
    }
    sessionStorage.setItem("tp",tp+props.price)
 }

 const decrement = ()=>{
    if(props.count==1){
        return;
    }
    props.setcount(props.count-1);
    var arr = JSON.parse(sessionStorage.getItem("items"))
    if (arr != null) {
        const brr = []
      arr.map((str) => {
        var obj = JSON.parse(str);
        if (obj.title == props.title) {
             var a = Number(obj.qty) - 1
             var newobj = {
                 ...obj,
                 qty:a
             }
             brr.push(JSON.stringify(newobj))
        }
        else{
        brr.push(JSON.stringify(obj));
        }
      })
      sessionStorage.setItem("items",JSON.stringify(brr))
    }
    var tp = Number(sessionStorage.getItem("tp"))
    sessionStorage.setItem("tp",tp-props.price)
 }

    return(
    <>
    <button type="button" className="btn btn-primary manuplate" onClick={decrement} ><i class="fa fa-minus" ></i></button>
    <input type="text" value={props.count} style={{width:"20%",textAlign:"center"}}/>
    <button type="button" className="btn btn-primary manuplate" onClick={increment}><i class="fa fa-plus" ></i></button>
    </>)
}

export default Generator;