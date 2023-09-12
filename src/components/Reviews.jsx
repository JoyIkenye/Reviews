import { useState } from "react";
import {reviews} from "../data2"
import {HiChevronLeft} from  "react-icons/hi";
import {HiChevronRight} from  "react-icons/hi";
import { FaQuoteRight } from 'react-icons/fa'
import "../assets/Review.css";



function Reviews (){
    const [index,setIndex]=useState(0)
   
    const randomReviews = () => {
        return Math.floor(Math.random() * reviews.length);
      };

   const newReviews= reviews[index]


const {id,name,job,image,text}=newReviews
const nextReviewer =()=>{
    setIndex((prevIndex)=>(prevIndex + 1) % reviews.length)
};
const prevReviewer =()=>{
    setIndex((prevIndex)=>{
        if (prevIndex === 0){
            return reviews.length -1;
        }else{
            return prevIndex -1;
        }
    })
}
const randomReviewer = () => {
    setIndex(randomReviews());
  };
return(
    <>
    <div className="header">
        <h1>Our Reviews</h1>
    </div>
    <div key={id} className="reviewContainer">
        <div className="image-container">
        <img src={image} alt={name} className="image"/>
        <FaQuoteRight className="quote-icon" />
        </div>
        <h2 className="name">{name}</h2>
        <h3 className="job">{job}</h3>
        <p className="text">{text}</p>
        <div className="btnContainer">
        <button onClick={prevReviewer} className="btn"><HiChevronLeft /> </button>
        <button onClick={nextReviewer} className="btn"> <HiChevronRight /></button>
        </div>
        <div className="randomBtn-container">
        <button onClick={randomReviewer} className="randomBtn">Suprise Me</button>
        </div>
    </div>
    </>
)
}
export default Reviews