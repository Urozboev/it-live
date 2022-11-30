import Slider from "react-slick";
import React, { Component } from 'react'

export class Comments extends Component {
    render() {
        const settings = {
            dots: false,
            navs: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <>
                <Slider {...settings}>
                    <div className="comments-box col-12 col-md-6 col-lg-4">
                        <div className="comment-author-img">
                            <img className="author-image" src="images/testimonial-user.png" alt="comment_author" />
                        </div>
                        <div className="author-info">
                            <h6 className="comment-authorname">
                                <a href="#" className="name">John Doe</a>
                                <span className="job">Web developer</span>
                            </h6>
                            <div className="comment-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                        </div>
                    </div>
                    <div className="comments-box col-12 col-md-6 col-lg-4">
                        <div className="comment-author-img">
                            <img className="author-image" src="images/testimonial-user.png" alt="comment_author" />
                        </div>
                        <div className="author-info">
                            <h6 className="comment-authorname">
                                <a href="#" className="name">John Doe</a>
                                <span className="job">Web developer</span>
                            </h6>
                            <div className="comment-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                        </div>
                    </div>
                    <div className="comments-box col-12 col-md-6 col-lg-4">
                        <div className="comment-author-img">
                            <img className="author-image" src="images/testimonial-user.png" alt="comment_author" />
                        </div>
                        <div className="author-info">
                            <h6 className="comment-authorname">
                                <a href="#" className="name">John Doe</a>
                                <span className="job">Web developer</span>
                            </h6>
                            <div className="comment-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                        </div>
                    </div>
                    <div className="comments-box col-12 col-md-6 col-lg-4">
                        <div className="comment-author-img">
                            <img className="author-image" src="images/testimonial-user.png" alt="comment_author" />
                        </div>
                        <div className="author-info">
                            <h6 className="comment-authorname">
                                <a href="#" className="name">John Doe</a>
                                <span className="job">Web developer</span>
                            </h6>
                            <div className="comment-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                        </div>
                    </div>
                </Slider>
            </>
        )
    }
}

export default Comments