import React from 'react';


const Product = ({item, styleObj}) =>{


  return(<div style={styleObj}>
    <div
      className='productImage'
      style={{
        backgroundImage:'url('+item.imageSrc+ ')',
        height:"200px",
        width: "auto"
      }}></div>
      <h1 >title{item.title}</h1>
      <p>{item.desciption}</p>
      <div href={item.link} className ='productLink'>
        {item.linkTitle}
      </div>
    </div>)
}

export default Product;
