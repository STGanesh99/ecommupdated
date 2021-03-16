import React,{useState,useContext} from 'react'
import { Button,Modal} from 'react-bootstrap';
import { Objdetails } from './App';


function MyVerticallyCenteredModal(props) {  
const obj = useContext(Objdetails)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {obj.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{alignItems:"center",textAlign:"center"}}>
          <img src={obj.img} style={{width:"10rem",height:"10rem",margin:"30px 0"}}></img>
          <p>
          {obj.descr}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
const Modall = (props)=>{
  
return(
    <>
      <MyVerticallyCenteredModal
        show={props.show}
        onHide={() => props.close()}
        style={{color:"black"}}
      />
   </>
)
}

export default Modall