import React from 'react';

const OutputStyle1 = {
  color: 'gold'
}

const OutputStyle2 = {
  color: 'silver'
}

const UserOutput = props => {
    return (
    <div className="type-1">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span style={OutputStyle1}>{props.username}</span> - Quis nesciunt sit fuga? Facilis, praesentium numquam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span style={OutputStyle2}>{props.username}</span> - Enim aspernatur adipisci minima et dicta incidunt?</p>
    </div>

    );
}

export default UserOutput;
