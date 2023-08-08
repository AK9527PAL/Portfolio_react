import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Rating from './Rating';
import Like from './Like';
export default function task2() {
    let arr = [
        {
            productname: "Laptop",
            productimage: "./images/thinkpad.jpg",
            productprice: "33000",
            productdis: "An excellent choice for Gaming Experience.",
            rating: "4"

        },
        {
            productname: "Mouse",
            productimage: "./images/mouse.jpg",
            productprice: "300",
            productdis: "An excellent choice for Gaming Experience.",
            rating: "5"

        },
        {
            productname: "Keybord",
            productimage: "./images/keybord.avif",
            productprice: "1000",
            productdis: "An excellent choice for Gaming Experience.",
            rating: "3"

        },
        {
            productname: "Mobile",
            productimage: "./images/download.jpeg",
            productprice: "150000",
            productdis: "An excellent choice for Gaming Experience.",
            rating: "2"

        }
    ]
    return (
        <div className='container my-5 '>
            <div className="row gy-3 row-cols-1 row-cols-md-4 my-2">
                {arr.map(

                    (x) => {
                        return (

                            <div className='col' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;", padding: "15px" }}>
                                <div className="card" style={{ width: "18rem", height: "450px" }}>
                                    <img src={x.productimage} width={"200px"} height={"200px"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h2 className="card-title">{x.productname}</h2>
                                        <h5 className="card-text">Rs. {x.productprice}</h5>
                                        <p>{x.productdis} </p>
                                        <a href="#" className="btn btn-primary">Buy now</a>
                                        <Rating rating={x.rating} />
                                        <div class='float-end'>
                                            <Like count="101" />
                                        </div>

                                    </div>
                                </div>
                            </div>


                        )
                    }
                )}
            </div>
        </div>
    )
}
