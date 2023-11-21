import React from "react";
import "../styles/contact.css";

const Contact = () => {
    return(
        <>
            {/* <!-- Contact Text Section Start --> */}
            <section className="contact-text-section container-fluid p-5 w-100 d-flex align-content-center justify-content-center">
                <div className="services-text text-white my-5">
                    <h1 className="fw-bolder text-center">CONTACT FORM</h1>
                </div>
            </section>
            {/* <!-- Contact Text Section End -->

            <!-- Contact Form Section Start --> */}
            <section className="contact-form-section container-fluid py-5">
                <div className="contact-form">

                    <form action="https://formsubmit.co/jbagor96@gmail.com" method="post" encType="multipart/form-data">

                        <div className="row">

                            <div className="col-md-6 px-4 py-3">
                            <input type="text" className="form-control first_name w-100 py-2" name="First_Name" id="firstname" placeholder="FIRST NAME" aria-label="FIRST NAME" required/>
                            </div>

                            <div className="col-md-6 px-4 py-3">
                                <input type="text" className="form-control last_name w-100 py-2" name="Last_Name" id="lastname" placeholder="LAST NAME" aria-label="LAST NAME" required/>      
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6 px-4 py-3">
                                <input type="tel" className="form-control contact_number w-100 py-2" name="Contact_Number" id="contactnumber" placeholder="CONTACT NUMBER" aria-label="CONTACT NUMBER" required/>
                            </div>
                            <div className="col-md-6 px-4 py-3">
                                <input type="number" className="form-control zip_code w-100 py-3" name="Zip/Postal_Code" id="zip/postalcode" placeholder="ZIP/POSTAL CODE" aria-label="ZIP/POSTAL CODE" required/>
                            </div>
                        </div>

                        <div className="row">      
                            <div className="col-md-6 px-4 py-3">
                                <input type="email" className="form-control email w-100 py-2" name="Email" id="email" placeholder="EMAIL" aria-label="EMAIL" required/>
                            </div>

                            <div className="col-md-6 px-4 py-3">
                                <input type="text" className="form-control address w-100 py-2" name="Address" id="address" placeholder="ADDRESS" aria-label="ADDRESS" required/>                  
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 px-4 py-3">
                                <textarea className="form-control message-text-area py-2 w-100" name="Message" id="message" aria-label="HOW CAN WE HELP YOU?" placeholder="HOW CAN WE HELP YOU?" required></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 px-4 py-2">
                                <button className="btn submit_form py-2 px-3 text-white fw-semibold" type="submit">SUBMIT</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            {/* <!-- Contact Form Section End -->

            <!-- Contacts Section Start --> */}
            <section className="contact container-fluid h-auto">
                <div className="row">
                    <div className="col-md-6 contact-info-left py-4 px-4">
                        <h2 className="mb-4 mt-2 text-white fw-bold">CONTACTS</h2>
                        <p className="mt-5">PHONE: <span className="d-inline"><a href="tel:09169675327" target="_blank" className="text-decoration-none text-white"> 0916-967-5327</a></span></p>
                        <p>ADDRESS: <span className="text-white d-inline"> Antonino, Labason, Zamboanga del Norte 7117</span></p>
                        <p>OPENING HOURS: <span className="text-white d-inline"> 8:00AM-5:00PM Mon-Sat</span></p>
                        <p>EMAIL: <span className="d-inline"><a href="mailto:jbagor96@gmail.com" target="_blank" className="text-decoration-none text-white"> jbagor96@gmail.com</a></span></p>
                        <div className="social-icons m-auto d-flex gap-3">
                            <a href="https://www.facebook.com/KinabuhingTurnero" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.tiktok.com/@kinabuhingturnero?_t=8g1xeOPP3Zp&_r=1" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-tiktok"></i></a>
                            <a href="https://www.youtube.com/@KinabuhingTurnero" target="_blank" className="text-decoration-none fs-3 text-white"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 contact-map-right py-4 px-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4791905761967!2d122.51804132756394!3d8.06749679481777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253c81e878401b9%3A0xeade9e033a04dabe!2sAntonino%2C%20Labason%2C%20Zamboanga%20del%20Norte!5e1!3m2!1sen!2sph!4v1700537105943!5m2!1sen!2sph" className="h-100 w-100 border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            {/* <!-- Contacts Section End --> */}
        </>
    )
}

export default Contact;