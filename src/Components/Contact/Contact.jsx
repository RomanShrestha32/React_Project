import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload on form submission
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7d53bd08-c33e-4188-a90a-9ca7f2df66f6");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult("Sent successfully!");
            event.target.reset();
            setTimeout(() => setResult(""), 5000); // Reset message after 5 seconds
        } else {
            console.log("Error", res);
            setResult("Error: " + res.message);
        }
    };

    return (
        <div className='contact'>
            {/* Left Column: Contact Info */}
            <div className="contact-col">
                <h3>Send us a Message <img src={msg_icon} alt="Message Icon" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum reprehenderit sequi laboriosam...</p>
                <ul>
                    <li><img src={mail_icon} alt="Mail Icon" /> romannshresthaa999@gmail.com</li>
                    <li><img src={phone_icon} alt="Phone Icon" /> 984364661</li>
                    <li><img src={location_icon} alt="Location Icon" /> Madhyapur Thimi, Bhaktapur</li>
                </ul>
            </div>

            {/* Right Column: Form */}
            <div className="contact-col form-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Your Phone Number" required />

                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder="Enter Your Message"></textarea>

                    <button type="submit" className="btn dark-btn">
                        Submit Here <img src={white_arrow} alt="Arrow Icon" />
                    </button>
                </form>
                {result && <div className="result-message">{result}</div>} {/* Feedback message */}
            </div>
        </div>
    );
};

export default Contact;
