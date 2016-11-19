import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';


class Product extends Component {


    render(){

      const {
        startY,
        startX,
        startOpacity,
        scaleHeight,
        scaleHeightFinal,
        initialStiffness,
        initialDamping,
        finalStiffness,
        finalDamping,
        activeIndex

      } = this.props;


      const outterWrapperStyles = {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: '#E0F7FA'
      }

      const innerWrapperStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        height: '100%'
      }

      const defaultStyleObj = { x: startX, y: startY, o: 1, f:1, s: scaleHeight }
      const specialStyleObj = { x: startX, y: startY, o: 1, f:2, s: scaleHeightFinal}

      const itemStyleArr = this.props.productArray.map( (item, index) =>  {
        return index == this.props.activeIndex?  specialStyleObj: defaultStyleObj
      })

      return (
        <div
        key={Math.random()}
        style={outterWrapperStyles}>

          <StaggeredMotion
            key={Math.random()}
            defaultStyles={itemStyleArr}
            styles={
              prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {

              if(i == this.props.activeIndex){
                //final and inital
                return {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(1),
                  f: spring(2),
                  s: spring(1)
                }
              }else{

              return i === 0
                // Initial stiffness and damping
                ? {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(.5,{ stiffness: initialStiffness, damping: initialDamping }),
                  f: spring(2,{ stiffness: initialStiffness, damping: initialDamping }),
                  s: spring(scaleHeightFinal)
                }
                // Final stiffness and damping
                : {
                    y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                    // o: spring(prevInterpolatedStyles[i - 1].o),
                    o: spring(.5,{ stiffness: finalStiffness, damping: finalDamping }),
                    f: spring(1),
                    s: spring(scaleHeightFinal,{ stiffness: finalStiffness, damping: finalDamping })
                  };
                }
            })}>

            {interpolatingStyles =>
              <div style={innerWrapperStyles}>

                {interpolatingStyles.map((style, i) => {

                  const ballStyles = {
                    display:'flex',
                    // order: i == activeIndex? -1: i,
                    background: '#fff',
                    border: '1px solid #220A37',
                    borderRadius: '1em',
                    WebkitTransform: `translate3d(0, ${style.y}px, 0) scale(${style.s})`,
                    opacity: style.o,
                    flexGrow:style.f,
                    flexDirection:'column',
                    alignItems:'center'
                  }

                  return <div
                            className="innerProductCont"
                            onClick={()=>this.props.testFun(i)}
                            key={this.props.productArray[i].title+ Math.random()}
                            style={ballStyles}>

                              <div
                                className='productImage'
                                style={{
                                  backgroundImage:'url('+this.props.productArray[i].imageSrc+ ')',
                                  height:"200px",
                                  width: "100%",
                                  marginTop:"2%",

                                  backgroundSize:'contain',
                                  backgroundPosition: 'center'
                                }}>

                              </div>
                            { activeIndex==i? <div className= "productText">
                                  <div className='left'>
                                      <h1>
                                        {this.props.productArray[i].title}
                                      </h1>
                                  </div>
                                  <div className='right'>
                                    <p>
                                      {this.props.productArray[i].desciption}
                                    </p>

                                    <div
                                      href={this.props.productArray[i].link}
                                      className ='productLink'>
                                      {this.props.productArray[i].linkTitle}
                                    </div>
                                  </div>
                              </div>:null}
                            </div>
                    })}
              </div>
            }
          </StaggeredMotion>
        </div>
      )
    }



  }

  Product.defaultProps= {
    startY:1,
    startOpacity:1,
    scaleHeight:1,
    scaleHeightFinal:.5,
    initialStiffness:70,
    initialDamping:16,
    finalStiffness:100,
    finalDamping:10

  }

export default Product;
