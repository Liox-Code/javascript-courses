import React from 'react';

import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {
    return(
        <div className='carousel'>
            <section className="carousel">
                <div className="carousel__container">
                    {children}
                </div>
            </section>
        </div>
    )
};

export default Carousel;