import { createSlice } from '@reduxjs/toolkit';
const initialState={
  contact:[],
  search:[],
  del:[],
}

const contactSlice=createSlice({
  name:'contact',
  initialState,
  reducers:{
 addContact:(state,action)=>{
  state.contact=[...state.contact, action.payload]
 },
 showContact:(state,action)=>{
  state.contact=action.payload
 },
 searchContact:(state,action)=>{
state.search=state.contact.filter((item)=>item.name === action.payload)
 },
 deleteContact:(state,action)=>{
  state.contact=state.contact.filter(item=>item.name !==action.payload)
 }
  }
})

export const contactActions = contactSlice.actions
export default contactSlice.reducer;