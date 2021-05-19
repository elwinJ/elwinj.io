import React from "react";
import profileImage from "../Images/myImage.jpg"
import "../CSS/Home.css"

function Home() {
    return(
        <div className="home_content">

            <h1>FirstName LastName</h1>

            <img src={profileImage} alt="my_image"/>


        </div>
        

        
    
    )
}

export default Home