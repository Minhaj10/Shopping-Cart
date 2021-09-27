export const reducer = (state,action)=>{

   if(action.type ==="REMOVE_ITEM"){
      return {
         ...state,
         item:state.item.filter((curElem)=>{
               return curElem.id != action.payload;
         }),
      };
   }
   if(action.type== "CLEAR_CART"){
      return{
         ...state,
         item:[]
      };
   }

   if(action.type==="INCREMENT"){
      let updatedcart= state.item.map((curElem)=>{
         if(curElem.id===action.payload){
            return {...curElem,quantity:curElem.quantity+1};
         }
         return curElem; 
      });
      return {...state,item:updatedcart}
   }
   
   if(action.type==="DECREMENT"){
      let updatedcart= state.item.map((curElem)=>{
         if(curElem.id===action.payload && curElem.quantity!=0){
            return {...curElem,quantity:curElem.quantity-1};
         }
         return curElem; 
      });
      return {...state,item:updatedcart}
   }

   if(action.type === "GET_TOTAL"){
      let {totalitem} = state.item.reduce(
         (accum,curval)=> {
         let {quantity} =curval;
         accum.totalitem+=quantity;
         return accum;
      },
      {
         totalitem: 0,
      });
      return {...state,totalitem}
   }

   return state
};