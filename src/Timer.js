import React, {
  useState
} from 'react';

function Timer(props) {

  const [itime, setItime] = useState(0);
  setInterval(handleTime, 1000)

  function handleTime() {
    var t = (Math.round((Date.now() - props.start) / 1000)) / 60;
    setItime(Math.round(t));
  }

  return ( <
    div className = "timer-container" >
    <
    div className = "timer-card" >
    <
    h1 > Timer App < /h1><br / >
    <
    h3 > You have been on this website since < /h3> <
    h2 > {
      itime
    } < /h2> <
    p > minutes. < /p> <
    /div> <
    /div>    
  );
}


export default Timer;