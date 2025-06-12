import React from 'react';

const AboutUs = () => {
    return (
        <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
            <div className="about-us">
                <div>
                    <section class="page-heading">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 className='title' ><b> <span className='text-green'>The</span> Montessa Restuarant</b></h1>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </section>

                </div>
                <p className='subtitle'>Welcome to Our Restaurant!</p><br />
                <p className=''>
                    Our restaurant is committed to providing delicious meals made from
                    fresh, locally sourced ingredients. We believe in creating a warm and
                    inviting atmosphere for our guests, where they can enjoy not just great
                    food but also exceptional service.
                </p>
                <p><br />
                    Our chefs are passionate about crafting culinary masterpieces that
                    cater to a variety of tastes. Whether you're craving a hearty steak,
                    fresh seafood, or a flavorful vegetarian dish, we have something
                    special for everyone.
                </p>
                <p><br />
                    We take pride in our commitment to sustainability, working closely
                    with local farmers and producers to minimize our environmental impact
                    while delivering the highest quality dishes to your table.
                </p>
                <p><br />
                    Thank you for choosing our restaurant. We look forward to serving you
                    and creating memorable dining experiences together.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
