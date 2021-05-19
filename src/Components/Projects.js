import React from "react";
import Project from "./Project";
import "../CSS/Projects.css"
import ObsidoImg from "../Images/obsido-logo.png"
import ftbImg from '../Images/ftb-logo.png'
function Projects () {

    return(
       <div className="projects">
        <h1>My Projects</h1>

        <h3>Hackathon Projects</h3>
        <div className="projects_container">
            <Project 
                title="Obsidio" 
                logo={ObsidoImg}
                description="A tool to mitigate the financial disruptions caused by Covid-19 by assessing user's financial standing and to determine their potential to venture off into expenditures and investments."
                technologies="Bubble.io fastapi GoogleCloud IEX Jupyter Pandas Python"
                vidLink= "qW9nYDhGl0o"
                link= "https://devpost.com/software/obsido"
            />

            <Project 
                title="FeedTheBronx" 
                logo={ftbImg}
                description="A tool to tackle food insecurites found in the bronx by creating a platform where individuals can post known food banks for others to go to donate, while to also redirect those with food insecurites or contributors to the proper sources."
                technologies="Adobe CSS Dialogflow Express.js Heroku HTML Javascript Node.js Parsel Postgresql React"
                vidLink= "R8nVUxUNCJU"
                link= "https://devpost.com/software/nsbehackathon_fall_2019"
            />

        </div>
        
        {/* <h3>Personal Projects</h3>
        <div className="projects_container">
            <Project/>
            <Project/>    
        </div> */}

        
    </div>
    )
}

export default Projects