import React from 'react';

const Card = ({ name, username, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?&size=200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;