import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Landingpage = () => {

  const [products,Setproducts]=useState([])
   const navigate=useNavigate() 

  const GetAllproducts=async()=>{
    try {
        const response=await axios.get("http://localhost:9000/product/allproducts")
        if(response.status==200){
            Setproducts([...response.data.Data])
        }
    } catch (error) {
        console.log(error);
    }
  }

   useEffect(()=>{
    GetAllproducts()
   },[])
   
   console.log("products",products)
  return (
    <>
     <Navbar/>
     <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <MDBRow>

        {

            products.map((item)=>(

                <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} onClick={()=>navigate(`/viewproduct/${item._id}`)}>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src={item.image}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">{item.title}</h5>
                    </a>
                    {/* <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a> */}
                    <h6 className="mb-3"><span style={{color:"red",fontSize:"1.5rem"}}> $</span> <span style={{fontWeight:"bold",fontSize:"1.3rem"}}> {item.price}</span></h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


            ))
        }
       








        
        
      </MDBRow>
    </MDBContainer>


    </>
  )
}

export default Landingpage