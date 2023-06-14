import React, { createContext, useContext, useReducer } from 'react'

const cartStateContext = createContext();
const cartDispachContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
        return [...state , {id: action.id , name : action.name , price : action.price, qty : action.qty, size : action.size, img: action.img}]
        default:
            console.log("error in redudcer")
    }
  };
  

export const CartProvider =({children})=>{

    const [state,dispach] = useReducer(reducer,[])

    return(
        <cartDispachContext.Provider value={dispach}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispachContext.Provider>
    )
}

export const useCart = ()=> useContext(cartStateContext);
export const useDispatchCart = ()=> useContext(cartDispachContext)
