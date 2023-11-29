import React from "react";
import { Link } from "react-router-dom";

const Blog3 = () => {
    return(
        <>
            <div className="px-4 py-5 container-fluid">
                <div className="row">
                <h2 className="fw-bolder mt-4">10 Energy Saving Tips at Home to Help the Earth and Lower Your Bills</h2>
                <p>Published November 28, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
                    <div className="col-md-9">
                        {/* <!-- Third Blog Start --> */}
                        <section className="energy-saving-tips" id="energy-saving-tips">
                            
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

export default Blog3;