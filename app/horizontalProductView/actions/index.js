export function forwardIndex(){

        return {
            type: "INCREASE_INDEX"
        }

}
export function backIndex(){

        return {
            type: "DECREASE_INDEX"
        }

}

export function addStyleObj(styleObj= { selector:{} }){

        return {
            type: "ADD_COLOR_SCHEME",
            payload: styleObj
        }

}

export function addProductArray(arr=[]){

        return {
            type: "ADD_PRODUCT_ARRAY",
            payload: arr
        }

}

export function addProduct(
  obj={
    title:null,
    imageSrc:null,
    desciption:null,
    link:null,
    linkTitle:null,
    hoverText:null,
    header:null
    }
  ){

        return {
            type: "ADD_PRODUCT_ARRAY",
            payload: obj
        }

}
