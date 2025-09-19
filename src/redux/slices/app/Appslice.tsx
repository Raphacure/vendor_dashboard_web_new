import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type AppState = {
    loading:{
        fullScreenloading:boolean,
        routeScreenLoading:boolean
    },
}

const initialState:AppState = {
    loading:{
        fullScreenloading:false,
        routeScreenLoading:false
    }
}


const AppSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        dispatchFullScreenLoading:(state:AppState,action:PayloadAction<boolean>)=>{
            state.loading.fullScreenloading = action.payload
        },
        dispatchRouteScreenLoading:(state:AppState,action:PayloadAction<boolean>)=>{
            state.loading.routeScreenLoading = action.payload
        }
    }
})

export const { dispatchFullScreenLoading,dispatchRouteScreenLoading} = AppSlice.actions


export default AppSlice.reducer