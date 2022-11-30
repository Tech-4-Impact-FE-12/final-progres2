import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Kegiatan.css'
import { useNavigate } from 'react-router-dom';

const Kegiatan = () => {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const response = await axios.get("https://coba2-production.up.railway.app/kegiatan");
    setActivity(response.data.data);
  };

  
  // const navigation = useNavigate();
  // const handleDetail = (id) => {
  //   navigation(`/activity/detail/${id}`);
  // };


  return (
    <>
      <div className="TitlePage d-flex justify-content-center">
        <h3>Daftar Kegiatan</h3>
      </div>
      {activity.map((kegiatan) => (
        // <div>
        //   <p>{kegiatan.deskripsi}</p>
        // </div>
        <div className="cardContainer d-flex justify-content-center"  key={kegiatan._id}>
           <div className='card' style={{ width: "70rem", borderRadius: "40px", backgroundColor: "#014751" }}>
             <div className='card-body'>
               <div className="row cardContent d-flex justify-content-between">
                 <div className="col-sm">
                  <img id="imgKegiatan" alt="imgKegiatan" />
               </div>
                 <div className="col-sm leftContent text-end">
                   <h4 className="">{kegiatan.judul_kegiatan}</h4>
                   <div className="buttonKegiatan">
                     <button type='button' className="buttonCard" onClick={() => handleDetail(kegiatan.id)}>Lihat Kegiatan</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div> 
         ))}    
    </>
  )
}

export default Kegiatan