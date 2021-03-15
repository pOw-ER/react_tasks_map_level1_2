

const Wetter = (props) => {
  return (
    <div className="wetterCard">
      <div>{props.day}</div>
      <div><img src={props.img} alt="" /></div>
      <div>{props.wert1} <span style={{ color: 'blue' }}>{props.wert2}</span></div>
    </div>
  );
}

export default Wetter;
