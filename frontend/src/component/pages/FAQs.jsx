import React from "react";

const FAQs = () => {
    return(
        <>
            <div className="container-fluid px-4 py-5">
                <h2 className="fw-bolder text-center mb-5">FREQUENTLY ASKED QUESTIONS   (FAQ'S)</h2>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                1. How do I find the right electrical supplies for my specific project?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <p>We offer detailed product descriptions, specifications, and usage recommendations to help you choose the perfect supplies for your project. Additionally, our customer support team is available to provide personalized guidance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                2.What if I need a product that is currently out of stock?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <p>If an item is out of stock, you can sign up for notifications to be alerted when it becomes available again. Alternatively, our team can assist in finding suitable alternatives or providing an estimated restocking date.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            3. Can I get assistance with installation or technical support for the products I purchase?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p>While we don't provide direct installation services, we offer comprehensive guides, manuals, and access to manufacturer support. Our team can also offer advice and troubleshooting tips to ensure smooth installation and usage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                4. What if I receive a damaged or defective product?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                                <p>If you receive a damaged or defective item, please contact us immediately with details and photos. We'll swiftly arrange for a replacement or refund as per our return policy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                5. Do you offer discounts for bulk purchases or to trade professionals?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                            <div className="accordion-body">
                                <p>Yes, we have special pricing and discounts available for bulk orders and trade professionals. Contact our sales team or check our bulk pricing section for more information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                6. What are the shipping costs and delivery times for my location?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                            <div className="accordion-body">
                                <p>Shipping costs and delivery times vary based on location and shipping method chosen at checkout. You can estimate shipping costs by entering your address during the checkout process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            7. Are your products compatible with specific electrical systems or standards?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                            <div className="accordion-body">
                                <p>Our products adhere to industry standards and specifications. However, for specific compatibility concerns, we recommend checking product descriptions or consulting with our support team before purchase.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                                8. Can I return an item if it doesn't meet my requirements or if I change my mind?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                            <div className="accordion-body">
                                <p>Yes, you can return items within our specified return window as long as they are unused, in their original packaging, and meet our return policy criteria. Refer to our Returns Policy for more details.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                                9. Are there any warranties provided with the products?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                            <div className="accordion-body">
                                <p>Many of our products come with manufacturer warranties. Details about warranties can be found in the product descriptions or by contacting our support team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                                10. Do you offer any loyalty or rewards program for frequent customers?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                            <div className="accordion-body">
                                <p>We frequently run special promotions and offer discounts during various seasons and events. Stay updated by subscribing to our newsletter or checking our website's 'Promotions' section for the latest deals. While we don't have a loyalty program at the moment, we regularly introduce exciting offers to ensure you get the best value for your purchases.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Back to Top Button */}
            <a href="#" id="back-to-top" className="btn position-fixed text-decoration-none fs-5"><i className="bi bi-arrow-up-short"></i></a>
            {/* Back to Top Button */}
        </>
    )
}

export default FAQs;