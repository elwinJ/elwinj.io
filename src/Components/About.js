import React from "react";
import '../CSS/About.css'
import PythonImg from "../Images/pythonlogo.png"
import JavaImg from "../Images/java-logo.png"
import JsImg from "../Images/js-logo.png"

function About() {
    
    return(
        <div className="about-container">
            <h1>ABOUT ME</h1>

            <div className="about_greetings">
                <p> Hello, I hope this message finds you well, and I want to thank you for your interest in me.</p>
            </div>
            
            <div className="about_paragraph">
                <p>
                    I first gained interest in the tech field through IT during my 
                    high school years, in which upon graduation I decided to explore what more the tech
                    field had to offer. Leading to my enrollment as a Computer Science major 
                    
                    for an associate's degree at Bronx Community College in which I was exposed to programing through Python
                    and a bit of C++ for object oriented programming. I continued down the Computer Science 
                    
                    pathway by pursuing a bachelor's degree in Computer Science at Lehman College
                    in which I continued learning more about object oriented programming as a 
                    software engineer through the languages of 
                    
                    Java, JavaScript, HTML, CSS, and MySQL; along with technologies such as React JS and Android Studio. I got even more of a 
                    sense of what is to be expected from this field by attending hackathons in 
                    
                    teams and working on solo mini-projects. And now I find myself along with many other 
                    aspiring software engineers do, which is searching for the right workplace to continue 
                    developing one's skill sets and knowledge.
                </p>
            </div>
            
            <h3>Resume Link</h3>
            <a href="https://drive.google.com/file/d/1dpXF0HHRQZzPpHm1FDxs1hF7ArBf_EW4/view?usp=sharing">Click Here</a>

            <div className="about_image-container">

            <img src={PythonImg} alt="my_image"/>
            <img src={JavaImg} alt="my_image"/>
            <img src={JsImg} alt="my_image" width="18%"/>
            
            </div>
        </div>
        
        
        


    )
}

export default About