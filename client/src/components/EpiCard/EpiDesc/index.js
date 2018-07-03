import React from 'react';

// import './styles.scss';

const EpiDescription = props => {
 
    return (
      <div className='epi-card-description-box'>
        <div className='epi-card-title'>
	        {title}
	      </div>
        <p className='epi-card-description'>
	        {description}
	      </p>
        <div className='row'>
          <a className='epi-button' href={url}>Watch Episode</a>
	      </div>
      </div>
    );
  }


export default EpiDescription;