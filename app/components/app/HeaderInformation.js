import React, {PropTypes} from 'react';

const HeaderInformation= ({  title="Showing", subredits }) => (
  <div>
  <ul><h2>{title}</h2>{subredits.map((item, index)=> <li key={Math.random()}>{item}</li>)}</ul></div>)

  HeaderInformation.PropTypes ={
    subredits: PropTypes.array.isRequired
  }
  export default HeaderInformation;
