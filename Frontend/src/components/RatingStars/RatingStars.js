import { useState } from "react";
import { FaStar } from "react-icons/all";
import './RatingStars.css';

const RatingStars = ({ rating }) => {

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < rating ? 'yellow-star' : 'grey-star'}>
                    <FaStar
                        size={30}
                    />
                </span>
            ))}
        </div>
    )
}

export default RatingStars;