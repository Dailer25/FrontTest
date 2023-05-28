import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login =()=>{
     //State de usuario
  const [user,setUser] = useState({
    email:"",
    password:""
 });

  const {email,password} = user;
  //state de autenticacion
 // const {setAuthUser} = useAuth();
  let navigate = useNavigate();
  const handleChange = e =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = e =>{
    console.log("Entra");
      e.preventDefault();
      if([email,password].includes('')){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Todos los campos son obligatorios',
            });
          return;
      }
      //consultando a la API
      userExisted();
  }

  const userExisted = async () =>{
      try{
        const {data}= await axios.post(`http://127.0.0.1:8000/api/login`,user);
        console.log(data);
        localStorage.setItem('token',data.token);
        //setAuthUser(data.user);
        if(data.token){
            navigate("/dashboard");
        }
        }catch(error){
          console.log(error);
          Swal.fire({
              title: 'Oops...',
              text: 'El usuario o la contraseña no existen',
          });
        }
  }

    return(
      <>  
        <div className="center">
          <Form onSubmit={handleSubmit}>
              <h1 className="mt-5 mb-3">Login</h1>
            <div className='row justify-content-center'>
              <div className='col-10 mb-3'>
                <input className="form-control" name="email" value={email} type="email" placeholder='Email' onChange={handleChange}></input>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-10'>
                <input 
                    className="form-control"
                    value={password} 
                    type="password" 
                    placeholder='*********' 
                    name="password"
                    onChange={handleChange}>
                    
                </input>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4'>
                <input type="submit" className='btn btn-block btn-danger mt-4' placeholder="Send"/>
              </div>
            </div>
          </Form>
        </div>
      </>
    )
}
export default Login