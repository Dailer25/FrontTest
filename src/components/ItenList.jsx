import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";

const ItemList = ({ user }) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleChange = (e) =>{
        setregistrar({
            ...registrarU,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    


    const Delete = async(id)=>{
        try {
            const token = localStorage.getItem("token");
            if(!token) return;
            const config = {
                Headers:{
                   "content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
                
            }
          const resp =  await axios.post(`http://127.0.0.1:8000/api/dashboard/delete_contact`,{id},config);
            console.log(resp);
        }catch(error){
            console.log(error)
        }

    }

  return (
      <tr>
        <th scope="row"> {user.id}</th>
        <td>{user.name}</td>
        <td>{user.lastname}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
        <td>
        <Button
          className="btn btn-success"
          onClick={handleShow}
        >
          Actualizar
        </Button>
        </td>
        <td>
          <button   className="btn btn-danger" onClick={() => Delete(user.id)}>Eliminar</button>
        </td>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Actualiza tu Usuario</Modal.Title>
        </Modal.Header>
        <form >
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <label>
                    <strong> Nombre</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                   // value={name}
                    name="name"
                   // onChange={handleChange}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <label>
                    <strong>Telefono</strong>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                   // value={cell}
                    name="cell"
                   // onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <label>
                    {" "}
                    <strong>email</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    //value={email}
                    name="email"
                   // onChange={handleChange}
                  />
                </Col>
              
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button type="submit" className="btn-success">
              Hecho
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      </tr>
  );
};

export default ItemList;
