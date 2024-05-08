import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import toast from 'react-hot-toast';

const UpdateMarque = () => {
  const { _id } = useParams()
  const navigate = useNavigate();
  const [data, setData] = useState({
    text: "",
  });

  const getInputData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getApiData = async () => {
    try {
<<<<<<< HEAD
      let res = await axios.get("https://riccobackend.onrender.co/api/marquee/" + _id)
=======
      let res = await axios.get("http://localhost:8000/api/marquee/" + _id)
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const postData = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const res = await axios.put("https://riccobackend.onrender.co/api/marquee/" + _id, data);
=======
      const res = await axios.put("http://localhost:8000/api/marquee/" + _id, data);
>>>>>>> c5d614f985aa9e2d5ac2825958f675f7b4bd9763
      console.log(res)
      if (res.status === 200) {
        toast.success("Marquee updated successfully");
        navigate("/marquee");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData()
  },[])
  return (
    <>
      <div className="container-fluid" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2 className=' p-2 text-dark text-center'>Update Marquee</h2>
            <div className="form-container">
              <form onSubmit={postData}>
                <div className="mb-2">
                  <label htmlFor="productName" className="form-label">Text</label>
                  <input type="text" name="text" id="" className="form-control" value={data.text} onChange={getInputData} />
                </div>
                <button type="submit" className="btn btn-dark w-100">Update Marque</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateMarque