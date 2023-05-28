import React,{useState,useEffect} from "react";
import axios from "axios";
import ItemList from "./ItenList";
const List =()=>{

    const endpo = 'http://127.0.0.1:8000/api/'
    const [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async() =>{
        const {data} = await axios.get(endpo+"show_contact");
        console.log(data.data);
        setUsers(data.data)
    }

    const Edit = async()=>{
        await axios.put(endpo+"update_contact")
    }

    return(
            <div className="row justify-content-center">
                <div className="col-12">
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">CC</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Cell-Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user)=>(
                                    <ItemList user={user} key={user.id}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    );

}

export default List