import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Marque = () => {
    const [data, setData] = useState([])
    const deleteRecord = async (_id) => {
        try {
<<<<<<< HEAD
            let res = await axios.delete("https://riccobackend.onrender.co/api/marquee/" + _id)
=======
            let res = await axios.delete("http://localhost:8000/api/marquee/" + _id)
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
            console.log(res);
            if (res.status === 200)
                toast.success("Marquee Deleted Successfully")
            getApiData()
        } catch (error) {

        }
    }
    const getApiData = async () => {
        try {
<<<<<<< HEAD
            let res = await axios.get("https://riccobackend.onrender.co/api/marquee")
=======
            let res = await axios.get("http://localhost:8000/api/marquee")
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="container-fluid" style={{ marginTop: 80 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2>Marquee Text</h2>
                            <span><Link to='/createmarquee' className='btn btn-dark'>Crete Marquee</Link></span>
                        </div>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.text}</td>
                                        <td>
                                            <Link to={`/updatemarquee/${item._id}`}>
                                                <button className='btn btn-success'>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { deleteRecord(item._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marque