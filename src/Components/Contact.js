import React from "react";
import emailjs from 'emailjs-com'
import '../CSS/Contact.css'


function Contact () {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pqr7jne', 'template_pq6q2id', e.target, 'user_qtsdFpqRoDM9pX7PMr9Ww')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("Your message has been sent, thank you for your time.")
          e.target.reset()
    } 

    function sumbitTest () {
        alert("ACTION DETECTED, the email function is temporarily disactivated.")
    }

    return(
        <div>
            <h1>Contact Me</h1>
            
            {/* <form onSubmit={sendEmail}> */}
            <form onSubmit={sumbitTest}>
                <div className="form_name-container">
                    <label for="name">Enter your name:</label><br></br>
                    <input type="text" id="full_name" name="name" required></input>
                    <br></br>
                </div>
                
                <div className="form_email-container">
                    <label for="email">Enter your email:</label><br></br>
                    <input type="text" id="full_email" name="email" required></input>
                    <br></br>
                </div>

                <div className="form_subject-container">
                    <label for="subject">Enter the subject:</label><br></br>
                    <input type="text" id="full_subject" name="subject" required></input>
                    <br></br>
                </div>

                <label for="message">Enter your message:</label><br></br>
                <textarea type="text" id="full_message" name="message" rows="8"  cols="100" required></textarea>
                <br></br>

                <input className="submitbutton" type="submit" value="Send Message"></input>
            </form>
        </div>
    )
}

export default Contact