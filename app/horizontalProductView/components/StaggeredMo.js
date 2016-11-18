import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';


const StaggeredMo = ({activeIndex, productArray}) => {

  const startY = 1;
  const startOpacity = 1;

  // Lower damping and stiffness here will exaggerate the
  // Start of the sequence of animations
  const initialStiffness = 400;
  const initialDamping = 50;

  // Lower damping and stiffness here will exaggerate the
  // End of the sequence of animations
  const finalStiffness = 400;
  const finalDamping = 60;
  /* ---------------------------------- */

  const outterWrapperStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: '#E0F7FA'
  }

  const innerWrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexFlow: 'row nowrap',

    height: '100%'
  }

  let initalStyleOb = { y: startY, o: startOpacity, f:1 }

  const itemStyleArr = productArray.map( item =>  initalStyleOb )
console.log(activeIndex, "test")
  return (
    <div style={outterWrapperStyles}>
      <StaggeredMotion
      key={Math.random()}
        defaultStyles={itemStyleArr}
        //must return array of syles with destination values
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          if(i==activeIndex){
            return {
              y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
              o: spring(1),
              f: spring(2)
            }
          }else{
          return i === 0
            // Initial stiffness and damping
            ? {
              y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
              o: spring(1),
              f: spring(1)
            }
            // Final stiffness and damping
            : {
                y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                o: spring(prevInterpolatedStyles[i - 1].o),
                f: spring(1)
              };
            }
        })}
      >
        {interpolatingStyles =>
          <div style={innerWrapperStyles}>
            {interpolatingStyles.map((style, i) => {
              const ballStyles = {
                display:'flex',

                background: '#D84315',
                borderRadius: '0%',
                margin:'1%',
                WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
                opacity: style.o,
                flex:style.f
              }


              return <div key={Math.random()} style={ballStyles}>
                <div
                  className='productImage'
                  style={{
                    backgroundImage:'url('+productArray[i].imageSrc+ ')',
                    height:"200px",
                    width: "auto"
                  }}></div>
                  <h1 >title{productArray[i].title}</h1>
                  <p>{productArray[i].desciption}</p>
                  <div href={productArray[i].link} className ='productLink'>
                    {productArray[i].linkTitle}
                  </div>
                </div>
            })}
          </div>
        }
      </StaggeredMotion>
    </div>
  )
}


export default StaggeredMo;
