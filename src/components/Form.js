import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city name here"/>
      <input type="text" name="country" placeholder="country name here"/>
      <button>Get Weather</button>
    </form>
  );
export default Form;
