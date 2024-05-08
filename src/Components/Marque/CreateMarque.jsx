import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const CreateMarque = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    text: "",
  });

  const getInputData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const res = await axios.post("https://riccobackend.onrender.co/api/marquee", data);
=======
      const res = await axios.post("http://localhost:8000/api/marquee", data);
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
      console.log(res)
      if (res.status === 200) {
        toast.success("Marquee created successfully");
        navigate("/marquee");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2 className=' p-2 text-dark text-center'>Create Marquee</h2>
            <div className="form-container">
              <form onSubmit={postData}>
                <div className="mb-2">
                  <label htmlFor="productName" className="form-label">Text</label>
                  <input type="text" name="text" id="" className="form-control" onChange={getInputData} />
                </div>
                <button type="submit" className="btn btn-dark w-100">Ceate Marque</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateMarque