import React from "react";
import "../styles/blog.css"
import { Link } from "react-router-dom";
const Blog = () => {
    return(
        <>
            <div className="blog-posts container-fluid px-4 py-5">
                <div className="row">
                <h2 className="fw-bolder mt-4">What are Electrical Hazards?</h2>
                <p>Published November 25, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
                    <div className="col-md-9 posts">
                        <section className="electrical-hazards" id="electrical-hazards">
                            <img src="https://plumbingandelectrical.net.au/wp-content/uploads/2018/12/electrical-hazard-at-home.jpg" className="w-100" alt=""/>
                            <p className="my-4">Electrical hazards encompass a range of potential dangers and risks that are linked to electrical systems. These hazards have the potential to cause severe injuries, including burns, electrocution, arc flash, electric shock, and other serious harm. In the most severe instances, they can even result in fires or explosions, posing a significant threat to both life and property. Consequently, it is crucial to prioritize electrical safety to ensure the overall well-being and security of a location and its occupants.</p>
                            <hr/>
                            <h2 className="fw-bolder my-2">Why It's Important to Know About These Hazards</h2>
                            <p className="my-4">Working around electricity can be safe on the job site if workers properly identify and control hazards. However, inadequate training, lack of experience, and failure to recognize potential hazards can lead to electric shock or death.</p>
                            <p className="my-4">The construction industry is particularly at risk, accounting for 52% of all electrical fatalities in the US workplace. Most of these incidents and fatalities occur due to direct worker contact with overhead power lines and contact with machines, tools, and metallic objects.</p>
                            <p className="my-4">To protect against these dangers, awareness is key. Knowing the potential risks associated with electricity allows individuals to take precautions and prevent accidents and fatalities. This knowledge also enables prompt action when signs of electrical hazards are spotted, contributing to overall workplace safety.</p>
                            <hr/>
                            <h2 className="fw-bolder my-4">Causes of Electrical Hazards</h2>
                            <p>Electrical hazards, while dangerous, can be prevented when you’re aware of the factors that contribute to them. Here's a list of the most common causes of electrical hazards to watch out for:</p>
                            <ul>
                                <li className="my-4"><strong>Insufficient insulation</strong> - Over time, electrical insulation can deteriorate due to wear and tear, rodents, or exposure to moisture. This degradation can lead to exposed wires and increase the risk of electric shock or short circuits.</li>
                                <li className="my-4"><strong>Circuit breaker failure</strong> - If the circuit breaker fails to trip during an overload, it loses its protective functioning, further increasing the risk of electrical hazards.</li>
                                <li className="my-4"><strong>Damaged electrical appliances</strong> - Loose connections, frayed wires, or cracked insulation can result in electrical malfunctions.</li>
                                <li className="my-4"><strong>Improper use of extension cords</strong> - Practices like daisy chaining and overloading can cause overheating and ignite electrical fires.</li>
                                <li className="my-4"><strong>Inadequate maintenance</strong> - Failing to regularly inspect electrical systems, ignoring warning signs, or bypassing safety procedures can trigger severe electrical hazards over time.</li>
                            </ul>
                            <hr/>
                            <h2 className="fw-bolder my-4">Electrical Hazards Examples</h2>
                            <p>Electrocution is one of the most common hazards across construction sites according to OSHA. Identifying electrical hazards can help raise awareness of the risks, their severity, and how they can harm workers.</p>
                            <p>In this section, learn about common electrical hazards in the workplace and electrical safety tips to prevent them:</p>
                            <ul>
                                <li className="my-2">Overhead power lines</li>
                                <li className="my-2">Damaged tools and equipment</li>
                                <li className="my-2">Inadequate wiring and overloaded circuits</li>
                                <li className="my-2">Exposed electrical parts</li>
                                <li className="my-2">Improper grounding</li>
                                <li className="my-2">Damaged insulation</li>
                                <li className="my-2">Wet conditions</li>
                            </ul>
                            <img src="../images/Examples-of-Electrical-Hazards.png" className="w-100 px-4" alt=""/>
                            <figcaption className="text-center">Examples of Electrical Hazards</figcaption>
                            <h3 className="fw-bolder mt-4">Overhead Power Lines</h3>
                            <p className="my-4">Overhead powered and energized electrical lines have high voltages which can cause major burns and electrocution to workers. Remember to maintain a minimum distance of 10 feet from overhead power lines and nearby equipment. Conduct site surveys to ensure that nothing is stored under overhead power lines.</p>
                            <p className="my-4">In addition, safety barriers and signs must be installed to warn nearby non-electrical workers of the hazards present in the area.</p>
                            <h3 className="fw-bolder">Damaged Tools and Equipment</h3>
                            <p className="my-4">Exposure to damaged electrical tools and equipment can be very dangerous. Do not fix anything unless you are qualified to do so. Thoroughly check for cracks, cuts, or abrasions on cables, wires, and cords. In case of any defects, have them repaired or replaced.</p>
                            <p className="my-4">Aside from this, Lock Out Tag Out (LOTO) procedures should be performed at all times before commencing electrical maintenance and repairs. LOTO procedures are there to protect all workers on a worksite.</p>
                            <h3 className="fw-bolder">Inadequate Wiring and Overloaded Circuits</h3>
                            <p className="my-4">Using wires of inappropriate size for the current can cause overheating and electrical fires to occur. To prevent this, use the correct wire suitable for the operation and the electrical load to work on. Use the correct extension cord designed for heavy-duty use.</p>
                            <p className="my-4">Make sure to not overload an outlet and use proper circuit breakers. Perform regular fire risk assessments to identify areas at risk of bad wiring and circuits.</p>
                            <h3 className="fw-bolder">Exposed Electrical Parts</h3>
                            <p className="my-4">Examples of exposed electrical parts include temporary lighting, open power distribution units, and detached insulation parts on electrical cords. These hazards can cause potential shocks and burns. Secure these items with proper guarding mechanisms and always check for any exposed parts to be repaired immediately.</p>
                            <h3 className="fw-bolder">Improper Grounding</h3>
                            <p className="my-4">The most common OSHA electrical violation is the improper grounding of equipment. Proper grounding can eliminate unwanted voltage and reduce the risk of electrocution. Never remove the metallic ground pin as it is responsible for returning unwanted voltage to the ground.</p>
                            <h3 className="fw-bolder">Damaged Insulation</h3>
                            <p className="my-4">Defective or inadequate insulation is a hazard. Be aware of damaged insulation and report it immediately. Turn off all power sources before replacing damaged insulation and never attempt to cover them with electrical tape.</p>
                            <h3 className="fw-bolder">Wet Conditions</h3>
                            <p className="my-4">Never operate electrical equipment in wet locations. Water greatly increases the risk of electrocution especially if the equipment has damaged insulation. Have a qualified electrician inspect electrical equipment that has gotten wet before energizing it.</p>
                            <h2 className="fw-bolder">Preventing Hazards Through Electrical Inspections</h2>
                            <p className="my-4">Electrical inspections are an essential preventive measure to avoid electrical hazards in the workplace. This procedure helps detect and address potential hazards, reducing the risk of electrical injuries and contributing to a safer working environment. Failure to conduct these inspections regularly can also lead to accidents caused by electric shock or even death.</p>
                            <p className="my-4">So how do these inspections aid in preventing electrical hazards? Here’s a quick overview to help you get started:</p>
                            <ul>
                                <li className="my-4"><strong>Assessing the condition of electrical equipment</strong>- During an electrical inspection, a property’s electrical equipment undergoes quality and safety checks to ensure that they are in working condition before being operated.</li>
                                <li className="my-4"><strong>Detecting electrical hazards</strong> – Regular electrical inspections allow electricians to identify faulty wiring, damaged cords, or malfunctioning equipment and carry out the necessary repairs or replacements.</li>
                                <li className="my-4"><strong>Ensuring compliance with safety codes</strong> – These inspections are conducted by electrical servicing companies to make sure that a property follows electrical safety laws and regulations.</li>
                                <li className="my-4"><strong>Evaluating electrical safety procedures</strong> – Electrical inspections provide an overall assessment of the worksite, training provided, and equipment used. These results allow you to identify and bridge any gaps in safety procedures.</li>
                                <li className="my-4"><strong>Recommending corrective actions</strong> – After completing the inspection, inspectors provide recommendations on areas for improvement based on the identified risks and noncompliances. These can range from repairs and replacements to upgrades and safety training.</li>
                            </ul>
                            <hr/>
                        </section>
                    </div>

                    <div className="related-posts col-md-3">
                        <div className="related-posts-container ps-3 pe-2 py-4">
                            <h5 className="fw-bolder text-center">Related Posts</h5>
                            <Link to="/blog" className="text-decoration-none text-white"><p className="fw-semibold">What are Electrical Hazards?</p></Link>
                            <Link to="/10-Bad-Habits-that-Waste-Energy-in-Your-Home" className="text-decoration-none text-white"><p className="fw-semibold">10 Bad Habits that Waste Energy in Your Home</p></Link>
                            <Link to="/10-Energy-Saving-Tips-at-Home-to-Help-the-Earth-and-Lower-Your-Bills" className="text-decoration-none text-white"><p className="fw-semibold">10 Energy Saving Tips at Home to Help the Earth and Lower Your Bills</p></Link>
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

export default Blog;