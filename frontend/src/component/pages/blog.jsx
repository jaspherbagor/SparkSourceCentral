import React from "react";
import "../styles/blog.css"
const Blog = () => {
    return(
        <>
            <div className="blog-posts container-fluid px-4 py-5 mt-5">
                <div className="row">
                    <div className="col-md-9 posts">
                        <section className="electrical-hazards" id="electrical-hazards">
                            <h2 className="fw-bolder">What are Electrical Hazards?</h2>
                            <p>Published November 25, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
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

                        {/* <!-- Second Blog Start --> */}
                        <section className="mt-5 10-bad-habits" id="10-bad-habits">
                            <h2 className="fw-bolder mt-5">10 Bad Habits that Waste Energy in Your Home</h2>
                            <p>Published November 27, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
                            <img src="https://www.greenoptimistic.com/wp-content/uploads/2015/02/power-waste-1404336378512.jpg" className="w-100 mb-3" alt=""/>
                            <p className="my-4">Doesn't it seem like everyone is becoming a little more energy conscious lately? People are trying to raise awareness and make changes for the good of the planet, future generations, and yes, their own wallets. Of course, even with the best intentions, we are all guilty of wasteful habits.</p>
                            <p className="my-4">With all our energy efficient appliances and upgrades, the average American household still uses around 11,000 kWh of electricity per year. That's more than $2,200 just on electricity bills every year! As electric companies hike up their rates every year that number becomes even higher. With all that electricity use (and wallet drainage) there is plenty of room for improving everyday efficiency.</p>
                            <p className="my-4">You would be surprised to discover how seemingly innocent little habits actually have a big impact on your annual energy costs. The good news is that through the magic of a little effort and self-discipline, bad habits can be swapped for good habits.</p>
                            <p className="my-4">Lets take a look at the top 10 energy wasting habits along with some simple solutions to these problems.</p>
                            <h3 className="fw-bold">1. Leaving the lights on.</h3>
                            <p className="my-4">It takes about two seconds to flip a light switch when you leave a room, but for some reason many people, myself included, tend to just leave the lights on all over the house as soon as the sun sets. If you cannot remember to turn off the lights every single time you walk out of a room, at least do a quick 2 minute walk through the house when you are leaving somewhere, especially if you will be away for more than a day.</p>
                            <h3 className="fw-bold">2. Leaving electronics plugged in.</h3>
                            <p className="my-4">Did you know that once electronics are done charging, they continue to suck up energy. Psst: That battery is not going to fill up past 100%! You can slay these energy vampires by unplugging your appliances and electronics when they are not in use. This probably will not be convenient to do this to your cable box or router, but if you have a TV that you do not use very often, it may be a good idea to unplug it until the next time you need to turn it on. An easier alternative is to plug your devices into power strips that can be switched off - some advanced power strips even shut off idle electronics automatically.</p>
                            <h3 className="fw-bold">3. Standing in front of an open fridge.</h3>
                            <p className="my-4">We waste around 10.4 hours a year just staring aimlessly into our refrigerators. Imagine all the cool air oozing out as you stand there opening and closing the fridge 10 times, before finally deciding to just order that pizza! Leaving a freezer open is even worse (2 min open freezer = 4 min open fridge). If you can't ditch the fridge browsing habit ─ I still do this every day ─ at least be sure not to accidentally leave the refrigerator open a crack and make sure you close the door tight. Modern appliances usually beep to warn you when this has happened.</p>
                            <h3 className="fw-bold">4. Washing laundry in hot water.</h3>
                            <p className="my-4">Only a few types of stains and certain fabrics need that high temperature to really be clean. Most clothing will wash our just fine in a warm temperature and some types of clothing - especially dark colors - actually do better in a cold wash. Think of all that energy wasted on heating up water that could be put to better use, say for a nice hot bath. Another good tip is to wait until you have enough laundry for a full load before running your washing machine, and to air dry your laundry whenever you can.</p>
                            <h3 className="fw-bold">5. Not programming the thermostat.</h3>
                            <p className="my-4">Did you know that your AC/heating system accounts for almost 50% of your energy usage? If you were to choose only 1 energy wasting habit to improve, this is the one. Whether you have a central system or a window unit, leaving the A/C running when you are not home wastes a lot of electricity. If you program your thermostat to adjust the temperature while you are out of the house so that your system does not need to work as hard, you can save $100 per season! Not a fan of coming home to a freezing or blazing hot house? Simply making a small adjustment in programming will make a big difference. By using a programmable thermostat, you can save around $180/year, according to EPA estimates.</p>
                            <h3 className="fw-bold">6. Forgetting to change air filters.</h3>
                            <p className="my-4">Speaking of air conditioners and furnaces, when was the last time you changed your filter? The air filter traps dust and other air pollutants until it becomes so clogged, your systems has to work harder and harder to push air through it. You can maximize efficiency by regularly changing your filters. As a bonus, raise your hand if you prefer cleaner air?</p>
                            <h3 className="fw-bold">7. Running a half-empty dishwasher.</h3>
                            <p className="my-4">Yes, dishwashers are convenient and actually save water when used efficiently. In this case, “efficiently” means “filled to the brim.” You will save both water as well as the energy used for the drying cycle, not to mention the energy used to heat up water if you are running your dishwasher on a high temp setting. Load your dishwasher fully before you turn it on and your wallet will be just a little happier.</p>
                            <h3 className="fw-bold">8. Taking long, hot showers.</h3>
                            <p className="my-4">When you drag yourself out of bed on that freezing Monday morning, you may want to stay and linger under that hot shower just a little longer. Just remember, those 5 precious extra minutes will add up to 155 extra minutes each month. Now a few of us may be willing to pay a little extra for such a luxury, but most people don't mind saving a little extra cash, especially if that means 5 more minutes of sleep in the morning! You can try placing a timer inside your shower or pre-setting your water heater to a lower temperature. Taking showers that are too long will dry out your skin anyway, and cold water is actually beneficial to your skin and hair.</p>
                            <h3 className="fw-bold">9. Using outdated appliances.</h3>
                            <p className="my-4">You may think you are saving money by not splurging on new appliances and using your old ones until they croak, but you may not take into account the potential energy savings you are missing out on. Newer, energy-efficient appliances would significantly reduce your energy usage. Think of it this way: You will recover the up-front cost of the appliance through the savings on your energy bill and enjoy the luxury of an upgrade at the same time.</p>
                            <h3 className="fw-bold">10. Falling asleep with the TV on.</h3>
                            <p className="my-4">This one has happened to most of us. You cozy up on your couch ready for your favorite show, and before you know it, you wake up at 4am and your TV is onto the next season already. Fortunately this will only add up to a few wasted cents, but if this is your nightly ritual, you are wasting $55 a year. To remedy this, you can program your TV to turn off the screen after a few hours, or just ditch this habit completely ─ your sleep quality will improve too. <strong>It's small changes like these that make a difference in the long run.</strong></p>
                            <hr/>
                        </section>

                        {/* <!-- Third Blog Start --> */}
                        <section className="mt-5 energy-saving-tips" id="energy-saving-tips">
                            <h2 className="fw-bolder">10 Energy Saving Tips at Home to Help the Earth and Lower Your Bills</h2>
                            <p>Published November 28, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
                            <img src="https://media.istockphoto.com/id/1221397055/photo/light-bulb-with-coins-beside-and-young-plant-on-top-concept-put-on-the-soil-in-soft-green.jpg?s=612x612&w=0&k=20&c=DYR1H3KSjuv047PNOUz8P6A1hfF62iD5j34wI8lO8Yk=" className="w-100 mb-3" alt=""/>
                            <p className="my-4">More and more people are becoming concerned about energy conservation in the house, mainly for two reasons: saving money and reducing environmental damage.</p>
                            <p className="my-4">We’re all likely to use more energy in our houses than usual now that working from home is becoming the new normal. The more time we spend at home, the more energy we use. This will have a negative impact on both our wallets and the environment. </p>
                            <p className="my-4">We will witness less damage to the ozone layer and a reduction in our dependence on nonrenewable and environmentally destructive fossil fuels if more families use less energy (or a cleaner energy source).</p>
                            <p className="my-4">Simply taking little measures to live more mindfully can be a lot beneficial to your wallet and can also help to erase some of the damage that is already done to the environment. Here are 10 simple ways you can do to save energy at home, lower your utility bill, and reduce your carbon footprint.</p>
                            <ol>
                                <li className="mt-5 mb-4"><strong>Use a fan to cool down instead of the air conditioner</strong>. Electric fans can also beat the heat!</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://pinoybuilders.ph/wp-content/uploads/2022/04/Tip-1.webp" className="w-75 h-75 m-2" alt=""/>
                                </div>
                                
                                <li className="my-5 mb-4"><strong>Turn the lights off when not in use</strong>. Lighting accounts for 5% of your charge, but this can rise if you're not attentive. Turning off lights when you leave a room is an easy habit to develop.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://pinoybuilders.ph/wp-content/uploads/2022/04/Tip-2.webp" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Open your windows</strong>. Allowing fresh air into your room helps cool down the area, minus the air conditioning.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://images.squarespace-cdn.com/content/v1/58adb3f25016e12237d1f5e2/1588365546092-UC6HTKCS5F05ETPW1KDZ/Window+Ventilation_iStock-830679624.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Unplug rarely used appliances</strong>. Unplugging items such as chargers for phones, tablets, and other gadgets when not in use can help you save electricity.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://cf.ltkcdn.net/save/images/orig/230910-1600x1030-does-unplugging-electronics-save-energy.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Replace old light bulbs with energy-saving light bulbs, such as LEDs</strong>. If you're going to be out of the room for less than 10 minutes, don't turn off your CFLs or LEDs because they use more energy turning on and off than they do running for that period.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://www.attainablehome.com/wp-content/uploads/2023/01/LED-Light-Bulbs-Do-You-Save_swapping-incandescent.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Keep the fridge door closed and take out all the items you need in one go</strong>. The refrigerator is often the most energy-intensive appliance in a home, so it's critical that it runs efficiently. The more frequently it gets opened, the harder it has to work to keep the temperature cold.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://pinoybuilders.ph/wp-content/uploads/2022/04/Tip-6.webp" className="w-75 h-75 m-2" alt=""/>
                                </div>
                                
                                <li className="mt-5 mb-4"><strong>Use smart technology</strong>. Investing in innovative technology now will save you money (and energy) in the long run. It can turn lights on and off, turn the air-conditioning off after a set time, and more.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://www.corbusian.com/wp-content/uploads/2021/10/home-energy-management.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Air drying garments</strong>. There's nothing quite like the scent of sheets, towels, and garments that have been air-dried. Consider air-drying your clothing on an old clothesline or even hanging them within your home. Save the dryer use for the rainy seasons! Alternatively, you might use an energy-saving dryer.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://worstroom.com/wp-content/uploads/2023/07/what-are-the-advantages-of-drying-clothes-outdoors.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Use natural light during the day</strong>. Lighting accounts for a substantial portion of energy bills, and reducing your energy use by harnessing sunlight is a natural approach to do so.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://thephysiocompany.co.uk/wp-content/uploads/sunlight-2.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>

                                <li className="mt-5 mb-4"><strong>Dress appropriately for the weather.</strong> When you're at home, wear cool clothes in the summer to keep comfortable without putting more strain on your heater and air conditioner.</li>
                                <div className="ways-image text-center justify-content-center">
                                    <img src="https://www.rei.com/dam/up_2018-02-content_team_041018_0050_journal.jpg" className="w-75 h-75 m-2" alt=""/>
                                </div>
                        
                            </ol>
                            <p className="my-3">Living an energy-efficient lifestyle is like hitting two birds with one stone: you'll save money and help save the environment. Consider making this a family habit to help you cultivate a more environmentally conscious lifestyle! </p>
                        </section>

                    </div>

                    <div className="related-posts col-md-3">
                        <div className="related-posts-container mt-5 ps-3 pe-2 py-4">
                            <h5 className="fw-bolder text-center">Related Posts</h5>
                            <a href="#electrical-hazards" className="text-decoration-none text-white"><p className="fw-semibold">What are Electrical Hazards?</p></a>
                            <a href="#10-bad-habits" className="text-decoration-none text-white"><p className="fw-semibold">10 Bad Habits that Waste Energy in Your Home</p></a>
                            <a href="#energy-saving-tips" className="text-decoration-none text-white"><p className="fw-semibold">10 Energy Saving Tips at Home to Help the Earth and Lower Your Bills</p></a>
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