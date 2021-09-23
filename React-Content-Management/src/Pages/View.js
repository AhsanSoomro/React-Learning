import React, {useState, useEffect} from 'react'
import fireDb from '../Firebase'
import {useParams, Link} from "react-router-dom"
import "./View.css"

const View = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();

    useEffect( () => {
        fireDb.child(`contacts/${id}`).get().then((snapshot)=> {
            if(snapshot.exists()){
                setUser({...snapshot.val()})
            } else {
                setUser({})
            }
        })
    }, [id])

    console.log("user", user)

    return (
        <div style={{marginTop: "150px"}}>
            <div className="card">
                <div className="card-header">
                    <p>User Contact Details</p>
                </div>
                <div className="container">
                    <div className="single">
                        <strong>ID:</strong>
                        <span>{id}</span>
                    </div>

                    <div className="single">
                        <strong>Name: </strong>
                        <span>{user.name}</span>
                    </div>

                    <div className="single">
                        <strong>Email: </strong>
                        <span>{user.email}</span>
                    </div>
                    
                    <div className="single">
                        <strong>Contact No: </strong>
                        <span>{user.contact}</span>
                    </div>
                    
                    <div className="back-btn">
                        <Link to="/">
                            <button className="btn btn-edit">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
