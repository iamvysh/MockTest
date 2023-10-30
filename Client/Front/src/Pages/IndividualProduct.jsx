import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
  } from "mdb-react-ui-kit";

const IndividualProduct = () => {
    const {id}=useParams()

    const [product,Setproduct]=useState([])

    const getProduct=async()=>{
        try {
            const response=await axios.get(`http://localhost:9000/product/viewproduct/${id}`)
            if(response.status==200){
                Setproduct([response.data.Data])
            }
        } catch (error) {
           console.log(error); 
        }
    }



    useEffect(()=>{
            getProduct()
    },[id])
    console.log(product);
  return (

    <>

    <Navbar/>
        {
            product.map((item)=>(
    <MDBContainer fluid>

                <MDBRow className=" justify-content-center  mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3" >
            <MDBCardBody style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={item.image}
                      fluid
                      className="w-100"
                    />
                    <a href="">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{item.title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% wood</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For office and home</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Classic
                      <br />
                    </span>
                  </div>
                  <p className="">
                    {item.description}
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${item.price}</h4>
                    <span className="text-danger">
                      <s>$200.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
            ))
        }
      
      
    
    
    </>
  )
}

export default IndividualProduct