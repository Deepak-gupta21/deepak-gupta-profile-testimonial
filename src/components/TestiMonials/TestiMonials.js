import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import './TestiMonials.css';
// http://localhost:5000
const TestiMonials = () => {
    const [testiMonials, setTestiMonials] = useState([]);

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get('https://deepakportfolioreviews-backend.onrender.com/api/getReviews');
            setTestiMonials(response.data);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const options = {
        showStatus: false,
        showThumbs: false,
        autoPlay: true,
        interval: 5000,
        showArrows: true,
        infiniteLoop: true,
    };

    return (
        <div className="testimonials pt-40 pb-40">
            <div className="contain mt-5">
               
                <div className="text-center">
                    <h3 className="sectionTitle">What My Clients/Mentees are Saying?</h3>
                </div>

                <div className="row ">
                    <div className="col-6">
                        <Carousel {...options} centerMode>
                            {testiMonials.length === 0 ? (
                                <div className="item">
                                    <h1>No Reviews yet!</h1>
                                </div>
                            ) : (
                                testiMonials.map((testiMonialDetail, index) => (
                                    <div className="item" key={index}>
                                        <div className="shadow-effect">
                                            <p>{testiMonialDetail.experience}</p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>{testiMonialDetail.name}</h5>
                                            <p>{testiMonialDetail.designation}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestiMonials;
