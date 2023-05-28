import React from "react";
import { Form } from "react-bootstrap";

const Register =()=>{
    return(
        <>
            <Form>
                <h1 className="justify-content-center">Register</h1>
                <div className="row justify-content.center">
                    <div className="col-8">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-8">
                        <input type="text" placeholder="Lastname"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="col-8">
                        <input type="Password" placeholder="***********"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input type="date" placeholder="Birthday"/>
                    </div>
                    <button>Send</button>
                </div>
            </Form>
        </>
    )
}

export default Register