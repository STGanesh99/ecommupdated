import React,{createContext} from "react"
import Nav from "./nav"
import Checkcard from './checkcard'
import emptycart from "./images/emptycart.png"



class Checkout extends React.Component{
  
 
state = {
    number:0,
    items:[],
    total:sessionStorage.getItem("tp"),
    clicked:false

}

componentDidMount(){
      var items = JSON.parse(sessionStorage.getItem("items"))
      if(items!=null){
          this.setState({number:items.length,items:[...items]})
      }
}

remove = ()=>{
    var items = JSON.parse(sessionStorage.getItem("items"))
      if(items!=null){
          this.setState({number:items.length,items:[...items]})
      }
}

render()
{
   
    return(<>
    <Nav items={this.state.number}/>
    <div className="checkout">
    {this.state.number!=0?<h1 style={{color:"white"}}>
    Cart Items      
    </h1>:<><h1 style={{color:"white"}}>Your Cart is Empty</h1>
    <img src = {emptycart} style={{marginTop:"7%"}}></img>
    <br/>
    <button type="button" className="btn btn-primary back" onClick={()=>this.props.history.push("/")}>Go Back</button>
    </>}
    <div style={{color:"black"}}>
    {this.state.items.map((str)=>{
        var obj  = JSON.parse(str)
        {console.log(this.state.total)}
        return(<Checkcard  obj={obj} handlechange={this.remove}/>)
    })}
    <br/>
    {this.state.number!=0&&<button type="button" className="btn btn-primary" onClick={()=>this.setState({clicked:true})} style={{margin:"3% 0"}} >Calculate Bill</button>}
    {this.state.clicked&&this.state.number!=0&&<h1 style={{color:"white"}}>Total Cost : {Number(sessionStorage.getItem("tp")).toFixed(2)} $</h1>}
    </div>
    </div>
    </>)
}

}

export default Checkout