import React from 'react';

const InfoCard = ({ data }) => {
  return (
    <div className='card' style='width: 18rem;'>
      <img
        src='https://docadvocates.com/wp-content/uploads/2019/08/generic-profile-pic.jpg'
        className='card-img-top'
        alt=''
      />
      <div className='card-body'>
        <p className='card-text'>{data.name}</p>
        <p className='card-text'>{data.gender}</p>
        <p className='card-text'>{data.homeworld}</p>
      </div>
    </div>
  );
};

export default InfoCard;
