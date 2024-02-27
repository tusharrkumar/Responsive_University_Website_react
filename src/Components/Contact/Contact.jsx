import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "bac692e8-143b-4652-93d1-b1686ddcc6d3");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        }).then((res) => res.json());

        if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
        } else {
        console.log("Error", res);
        setResult(res.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important tous as we strive toprovide exceptioal service to our university community.</p>
                <ul>
import mail_icon from '../../assets/mail-icon.png'
                    <li><img src={mail_icon} alt="" />tusharkumarpanda01@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 7008982539</li>
                    <li><img src={location_icon} alt="" />3rd Cross, PR Layout, Marathahalli <br /> Karnataka, INDIA</li>
                </ul> 
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" id="" placeholder='Enter Your Mobile Number'/>

                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
