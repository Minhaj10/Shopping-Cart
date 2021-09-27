export const reducer = (state, action) => {
    //if we get a action call from red delete button for each element we will remove this particuller element by using filter
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id != action.payload;
            }),
        };
    }

    // action call from clear button will work here
    // by making item array null it deletes all the element from component
    if (action.type == "CLEAR_CART") {
        return {
            ...state,
            item: [],
        };
    }

    //here we will get current quantity of a item ,when increment button pressed it will increment quantity by 1
    if (action.type === "INCREMENT") {
        let updatedcart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        });
        return { ...state, item: updatedcart };
    }
    //here we will get current quantity of a item ,when decrement button pressed it will decrement quantity by 1
    if (action.type === "DECREMENT") {
        let updatedcart = state.item.map((curElem) => {
            //here condition makes sure that our number never goes to zero
            if (curElem.id === action.payload && curElem.quantity != 0) {
                return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
        });
        return { ...state, item: updatedcart };
    }

    //here this action call get two properties ,totalitem & totalammount
    //intially both have zero on their account
    //any movement in increment or decrement button will toggle this action call
    //storing individual total price in "induvidualtotal" variable and  passing total of everyelement total by accum.totalammount

    if (action.type === "GET_TOTAL_ITEM") {
        let { totalitem, totalammount } = state.item.reduce(
            (accum, curval) => {
                let { quantity, price } = curval;
                let induvidualtotal = quantity * price;
                accum.totalammount += induvidualtotal;
                accum.totalitem += quantity;
                return accum;
            },
            {
                totalitem: 0,
                totalammount: 0,
            }
        );
        return { ...state, totalitem, totalammount };
    }

    return state;
};
