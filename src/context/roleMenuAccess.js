import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    isEventer: false,
    roleMenuAccess:[],
    isStudent: false,
};

export const RoleMenuAccessContext = createContext(INITIAL_STATE);

const RoleMenuAccessReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ISEVENTER":
            return {
                ...state,
                isEventer: action.payload,
            };
        case "ADD_ROLEMENUACCESS": 
            return {
                ...state,
                roleMenuAccess: action.payload.roleMenuAccess,
                isStudent:action.payload
            };
        case "REMOVE_CONTEXT":  
            return {
                isEventer: false,
                roleMenuAccess: []
            };
        default:
            return state;
    }
};

export const RoleMenuAccessContextProvider = ({ children }) => {
    const [state,dispatch ] = useReducer(RoleMenuAccessReducer, INITIAL_STATE);

    return (
        <RoleMenuAccessContext.Provider
            value={{
                isEventer: state.isEventer,
                roleMenuAccess: state.roleMenuAccess,
                isStudent: state.isStudent,
                dispatch,
            }}
        >
        {children}
        </RoleMenuAccessContext.Provider>
    );
};