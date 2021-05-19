import React, {useState} from "react";
import Modal from 'react-modal'
import "../CSS/Project.css"
import YouTubeVid from './YouTubeVid';

// This is to fix the accessibility warnings in the console.
// Such warnings are caused by not having the appElement defined on the modal import.
Modal.setAppElement('#root') 


function Project (props) {
    const [isOpen, setOpen] = useState(false);

    return(
        <div>
            <Modal 
                isOpen={isOpen} 
                onRequestClose={() => setOpen(false)} 
                style={
                    {
                        content: {
                            top: '20%',
                            left: '10%',
                            right: '10%',
                            bottom: '10%'
                        }
                    }
                }
            >
                <div className="project-modal">
                    <button onClick={() => setOpen(false)}>close</button>
                    <h1>{props.title}</h1>
                    <p className="p_description">{props.description}</p>
                    <div className="project-modal_info">
                        <YouTubeVid videoId={props.vidLink}/>
                        <div className="project-modal_info_tech">
                            <h2>Technologies</h2>
                            <p>{props.technologies}</p>
                        </div>
                    </div>
                </div>
                <a className="projectLink" href={props.link}>Click here to go to project's submission</a>
                
                

            </Modal>
            <div className = "project-container" onClick={() => setOpen(true)}>
                <p>{props.title}</p>
                <img src={props.logo} />
            </div>
        </div>
        
    )
}

export default Project