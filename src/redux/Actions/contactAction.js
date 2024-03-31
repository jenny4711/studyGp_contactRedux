import { contactActions } from '../reducers/contactReducer';

export const addContact=(item)=>async(dispatch)=>{
  try{
    dispatch(contactActions.addContact(item))
  }catch(error){
    console.log(error,'error')
  }

}

export const searchContact=(item)=>async(dispatch)=>{
  try{
    dispatch(contactActions.searchContact(item))
  }catch(error){
    console.log(error,'error')
  }
}

export const delBtn=(name)=>async(dispatch)=>{
  try{
    dispatch(contactActions.deleteContact(name))
  }catch(error){
    console.log(error,'error')
  }
}