import React from 'react';

const UserOutput = props => {
    return (
    <div className="type-1">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {props.username} - Quis nesciunt sit fuga? Facilis, praesentium numquam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {props.username} - Enim aspernatur adipisci minima et dicta incidunt?</p>
    </div>

    );
}

export default UserOutput;
