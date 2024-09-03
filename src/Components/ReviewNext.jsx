import { useState } from 'react';
import reviews from '../Api/datafirst';

export default function ReviewNext() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const checkIndex = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <div className='container'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={image} alt={name} className='card-img-top' style={{ maxHeight: '220px', objectFit: 'cover' }} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{job}</p>
          <p className='card-text'>{text}</p>
        </div>
        <div className='d-flex justify-content-center align-items-center my-2'>
          <a className="btn btn-primary me-3 px-3" onClick={prevReview}>Previous</a>
          <a className="btn btn-primary px-3" onClick={nextReview}>Next</a>
        </div>
      </div>

    </div>
  );
}
