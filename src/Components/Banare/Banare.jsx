import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';

const Banare = () => {
    const [data, setData] = useState([]);

    const getApiData = async () => {
        try {
<<<<<<< HEAD
            const res = await axios.get("https://riccobackend.onrender.co/api/banare");
=======
            const res = await axios.get("http://localhost:8000/api/banare");
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRecord = async (_id) => {
        try {
<<<<<<< HEAD
            const res = await axios.delete(`https://riccobackend.onrender.co/api/banare/${_id}`);
=======
            const res = await axios.delete(`http://localhost:8000/api/banare/${_id}`);
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
            if (res.status === 200) {
                toast.success("Banare Deleted Successfully");
            }
            getApiData();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <div className="container-fluid" style={{marginTop:80}}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2>Banare</h2>
                            <span><Link to='/createbanare' className='btn btn-dark'>Create Banare</Link></span>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.image} alt="" style={{ height: 50 }} /></td>
                                        <td><Link to={`/updatebanare/${item._id}`}><button className='btn btn-success'>Edit</button></Link></td>
                                        <td><button className='btn btn-danger' onClick={() => { deleteRecord(item._id) }}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banare;
