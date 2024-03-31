import React ,{useState}from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { searchContact ,delBtn} from '../redux/Actions/contactAction';
import { useSelector ,useDispatch } from 'react-redux';
const ContactList = ({open,setOpen}) => {
  const {contact,search}=useSelector(state => state.contact)
  const result = useSelector(state=>state)
  const [searchInput,setSearchInput]=useState("")
  const [del,setDel]=("")
  const dispatch=useDispatch()
console.log(result,'result')
 const handleSearch=()=>{
dispatch(searchContact(searchInput))
setOpen(!open)
 }

 const handleDelete=(name)=>{
dispatch(delBtn(name))
 }

  return (
    <div>
     <SearchBox open={open} setSearch={setSearchInput} handleSearch={()=>handleSearch()}/>
     <div className={!open?'':'none'}>
     {contact.map((item)=>(
      <div className='itemDiv'>
 <ContactItem name={item?.name} number={item?.phoneNum} onPress={() => handleDelete(item?.name)} />

 </div>
 
     ))}
    </div>
    <div className={!open?'none':''}>
    {search.map((item)=>(
 <ContactItem name={item?.name} number={item?.phoneNum} />
     ))}
    </div>
    </div>
  );
}

export default ContactList;
