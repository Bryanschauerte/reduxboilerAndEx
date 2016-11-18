let dummy = [{
              title:'High Quality Shoe',
              imageSrc:'http://americanshoeservice.com/images/oldshoe.png',
              desciption:"Why put effort into making your shoe dirty when you can get one with the job already done??",
              link:"http://www.amazon.com",
              linkTitle:'Buy Now',
              hoverText:"It's already broken in!",
              header:'This China made shoe will be the last shoe you ever need to buy!'
            },
            {
              title:"Mr Mittons",
              imageSrc:'http://uploads.neatorama.com/images/posts/328/88/88328/1455494723-0.jpg',
              desciption:'Mr Mittons is the smartest cat ever. Its documented. He once hatched a 13 step plan to get a past owner to sell the family dog.',
              link:'https://www.utahhumane.org',
              linkTitle:'Please take him',
              hoverText:'He loves to cuddle!',
              header:'So full of personality'
            },{
              title:'Self-Opening Can',
              imageSrc:'http://www.clker.com/cliparts/5/2/b/0/1353319764335847834tin_can_png_by_amalus-d37k2qd.png',
              desciption:'The best 80% tin can on the market. Not good for kicking',
              link:'https://en.wikipedia.org/wiki/Tin_can',
              linkTitle:'Check out the research',
              hoverText:"Kick the Can! I don't Care!!",
              header:"Really. NOT made for kicking."
              }]
export default function horizontalPView (
  state = {
    index:0,
    productArray:dummy,
    styleScheme:[],
    changeDone:true,
    changeHappening:false

    }, action){
      switch (action.type) {
        case 'INCREASE_INDEX':
           if(state.productArray.length > state.index+1){
             const index = state.index+1;
             return {...state, index}
           }else{
             const index = 0;
              return {...state, index}
           }
         case 'DECREASE_INDEX':
            if( state.index-1 >= 0){
              const index = state.index-1
              return {...state, index}
            }else{
              const index = state.productArray.length-1;
              return {...state, index}
            }
          case 'ADD_COLOR_SCHEME':
            const styles = state.styleScheme;
            styles.push(action.payload);
            return {...state, styleScheme:styles}

          case 'ADD_PRODUCT_ARRAY':
            return {...state, productArray:action.payload}

          case 'CHANGE_HAPPENING':

              return {...state, changeDone:false, changeHappening:true}


          case 'CHANGE_DONE':

              return {...state, changeDone:true, changeHappening:false}

          case 'ADD_PRODUCT':
            const products = state.productArray;
            products.push(action.payload);

            return {...state, productArray:products}

        default:
          return state;
      }
    }
