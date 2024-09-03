// eslint-disable-next-line no-unused-vars
import React from 'react'
import reviews from '../Api/datafirst';
import peoples from '../Api/datasecond';


export default function FirstComponent() {
    return (
        <div className='container my-3'>
            <div className="reviews">
                {
                    reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <img src={review.image} alt={review.name} className="review-image" />
                            <h2>{review.name}</h2>
                            <h4>{review.job}</h4>
                            <p>{review.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className="people-list">
                {
                    peoples.map((person) => (
                        <div key={person.id} className="person-card">
                            <img src={person.image} alt={person.name} className="person-image" />
                            <h2>{person.name}</h2>
                            <p>Age: {person.age}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
