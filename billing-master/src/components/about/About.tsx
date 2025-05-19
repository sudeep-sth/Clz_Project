import React from 'react'
import image from '../../assets/coffee02.jpg'


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

type Props = {}

const About = (props: Props) => {
  return (
    <div>
    <div className='main '>

        <section id="about" className="about ">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <div className="about-img pt-20">

                            <Image src={image} alt="Coffee" width={600} height={500} />
                            {/* <img src="../../assets/coffee02.jpg" alt="" /> */}
                        </div>
                    </div>


                    <div className="col-lg-6  pt-lg-0 order-2 order-lg-1 content">
                        <h3 className='pt-20'>Welcome to Coffee House</h3>
                        <p className="fst-italic">
                            At Coffee House, we have everything you need for your coffee cravings - from freshly roasted beans to
                            ready-to-drink beverages. Experience the ultimate coffee destination with us today.
                        </p>
                        <p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> Coffee brewed to perfection you keep coming back.</li>
                                <li><i className="bi bi-check-circle"></i> Also providing delicious meals to top with your coffee.</li>
                                <li><i className="bi bi-check-circle"></i> With coffee mix that ensures to keep your engine running for the whole day </li>
                            </ul>
                            Welcome to Coffee House, your go-to coffee shop for all things caffeinated. Our goal is to provide a warm
                            and inviting atmosphere where you can relax, unwind, and enjoy a delicious cup of coffee.
                        </p>
                        <p>
                            At Coffee House, we take pride in our expertly crafted coffee beverages made with the highest quality beans
                            and ingredients. Whether youre in the mood for a classic espresso or a specialty latte, we have something
                            for every coffee lover.
                        </p>
                        <p>
                            But coffee isnt all we offer - our menu also includes a variety of pastries, sandwiches, and other light
                            bites to satisfy your hunger. So come on in, pull up a chair, and let us take care of you. We cant wait
                            to serve you at Coffee House.
                        </p>
                    </div>

                </div>

            </div>
        </section >
    </div >
</div>
  )
}

export default About