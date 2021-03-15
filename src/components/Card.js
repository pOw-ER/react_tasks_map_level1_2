import React from 'react';

const Card = (props) => {
  console.log(props.genre.forEach(x => console.log(x)));
  return (

    <div className="card">
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      <p>{props.genre[0] ? props.genre[0] : ''}</p>
      <p>{props.genre[1] ? props.genre[1] : ''}</p>
      <p>{props.genre[2] ? props.genre[2] : ''}</p>
      <p>{props.genre[3] ? props.genre[3] : ''}</p>
      <p>{props.genre[4] ? props.genre[4] : ''}</p>
    </div>
  );
}

export default Card;
