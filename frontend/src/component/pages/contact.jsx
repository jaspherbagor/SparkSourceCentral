import React, { useState } from "react";
import '../styles/contact.css';

const Contact = () => {
    const [users, setUser] = useState({
        FirstName: '',
        LastName: '',
        ContactNumber: '',
        ZipCode: '',
        Email: '',
        Address: '',
        Message: ''
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({...users, [name]: value});
    };

    const sendData = async (e) => {
        e.preventDefault();
        const { FirstName, LastName, ContactNumber, ZipCode, Email, Address, Message } = users;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName,
                LastName,
                ContactNumber,
                ZipCode,
                Email,
                Address,
                Message
            })
        };

        try {
            const res = await fetch('https://e-commerce-contact-f93f2-default-rtdb.firebaseio.com/Message.json', options);
            console.log(res);

            if (res.ok) {
                alert("Your Message Has Been Sent");
            } else {
                alert("An Error Occurred");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An Error Occurred");
        }
    };

    return (
        <>
            <section className="contact-text-section container-fluid p-5 w-100 d-flex align-content-center justify-content-center">
                <div className="services-text text-white my-5">
                    <h1 className="fw-bolder text-center">CONTACT FORM</h1>
                </div>
            </section>
            <section className="form_section container-fluid px-4 py-5">
                <form method="POST">
                    <div className="row">
                        <div className="col-md-6 px-4 py-3">
                            <input type="text" name="FirstName" className="form-control first_name" value={users.FirstName} placeholder="First Name" required autoComplete="off" onChange={data}/>
                        </div>
                        <div className="col-md-6 px-4 py-3">
                            <input type="text" name="LastName" className="form-control last_name" value={users.LastName} placeholder="Last Name" required autoComplete="off" onChange={data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 px-4 py-3">
                        <input type="tel" name="ContactNumber" className="form-control contact_number" value={users.ContactNumber} placeholder="Contact Number" required autoComplete="off" onChange={data}/>
                        </div>
                        <div className="col-md-6 px-4 py-3">
                            <input type="number" name="ZipCode" className="form-control zip_code" value={users.ZipCode} placeholder="Zip Code" required autoComplete="off" onChange={data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 px-4 py-3">
                            <input type="email" name="Email" className="form-control email" value={users.Email} placeholder="Email" required autoComplete="off" onChange={data}/>
                        </div>
                        <div className="col-md-6 px-4 py-3">
                            <input type="text" name="Address" className="form-control address" value={users.Address} placeholder="Address" required autoComplete="off" onChange={data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-4 py-3">
                            <textarea name="Message" className="form-control message-text-area" value={users.Message} placeholder="Your Message" required autoComplete="off" onChange={data}></textarea>
                        </div>
                    </div>
                    <div className="mt-3 px-2">
                        <button type="submit" onClick={sendData} className="submit_form ms-1 px-3 py-2 fw-semibold text-white">Send</button>
                    </div>    
                </form>
            </section>

            {/* Contacts Section Start  */}
            <section className="contact container-fluid h-auto">
                <div className="row">
                    <div className="col-md-6 contact-info-left py-4 px-4">
                        <h2 className="mb-4 mt-2 text-white fw-bold">CONTACTS</h2>
                        <p className="mt-5">PHONE: <span className="d-inline"><a href="tel:09169675327" target="_blank" className="text-decoration-none text-white"> 0916-967-5327</a></span></p>
                        <p>ADDRESS: <span className="text-white d-inline"> Antonino, Labason, Zamboanga del Norte 7117</span></p>
                        <p>OPENING HOURS: <span className="text-white d-inline"> 8:00AM-5:00PM Mon-Sat</span></p>
                        <p>EMAIL: <span className="d-inline"><a href="mailto:jbagor96@gmail.com" target="_blank" className="text-decoration-none text-white"> jbagor96@gmail.com</a></span></p>
                        <div className="social-icons m-auto d-flex gap-3">
                            <a href="https:www.facebook.com/KinabuhingTurnero" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-facebook"></i></a>
                            <a href="https:www.tiktok.com/@kinabuhingturnero?_t=8g1xeOPP3Zp&_r=1" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-tiktok"></i></a>
                            <a href="https:www.youtube.com/@KinabuhingTurnero" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 contact-map-right py-4 px-4">
                        <iframe src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4791905761967!2d122.51804132756394!3d8.06749679481777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253c81e878401b9%3A0xeade9e033a04dabe!2sAntonino%2C%20Labason%2C%20Zamboanga%20del%20Norte!5e1!3m2!1sen!2sph!4v1700537105943!5m2!1sen!2sph" className="h-100 w-100 border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            {/* Contacts Section End  */}

        </>
    );
};

export default Contact;