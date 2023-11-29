import React from "react";
import {Link} from "react-router-dom"

const Blog2 = () => {
    return(
        <>
            <div className="px-4 py-5 container-fluid">
                <div className="row">
                <h2 className="fw-bolder mt-4">10 Bad Habits that Waste Energy in Your Home</h2>
                <p>Published November 27, 2023 | by <span className="fw-medium">Jaspher Bagor</span></p>
                    <div className="col-md-9">
                        {/* <!-- Second Blog Start --> */}
                        <section className="10-bad-habits" id="10-bad-habits">
                            
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

export default Blog2;