import React, { useState, useEffect } from 'react'
import Generator from "./Generator"
import { Card, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"



const Checkcard = (props) => {
  const [count, setcount] = useState(1);
  const history = useHistory();

  useEffect(() => {
    var arr = JSON.parse(sessionStorage.getItem("items"))
    if (arr != null) {
      arr.map((str) => {
        var obj = JSON.parse(str);
        if (obj.title == props.obj.title) {
          {console.log(obj.qty)}
          setcount(obj.qty)
        }
      })
    }
  },[])


  const remove = () => {
    var arr = JSON.parse(sessionStorage.getItem("items"))
    if (arr != null) {
      var brr = []
      arr.map((str) => {
        var obj = JSON.parse(str);
        if (obj.title != props.obj.title) {
          brr.push(JSON.stringify(obj))
        }
      })

      sessionStorage.setItem("items", JSON.stringify(brr))
      var p = Number(sessionStorage.getItem("tp"))
      sessionStorage.setItem("tp", p - props.obj.price)
      props.handlechange()
    }
  }

  return (<>
    <Card style={{ width: '18rem', height: "35rem" }}>
      <Card.Img variant="top" src={props.obj.img} style={{ width: "10rem", height: "10rem", marginTop: "10%" }} />
      <Card.Body>
        <Card.Title>{props.obj.title}</Card.Title>
        <Card.Text>
          {props.obj.price}$
    </Card.Text>
        <Generator count={count} setcount={(count) => setcount(count)} price={props.obj.price} title={props.obj.title}/>
        <p style={{ color: "black" }}>Cost:{Number(count * props.obj.price).toFixed(2)}</p>
        <button type="button" className="btn btn-danger remove" onClick={remove}>Remove</button>
      </Card.Body>
    </Card>
  </>)
}

export default Checkcard