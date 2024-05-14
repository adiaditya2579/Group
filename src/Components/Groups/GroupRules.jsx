import React,{useContext} from 'react'
import { RxCross2 } from "react-icons/rx";
import { LoginContext } from "../../Contexts/LoginContect";
import { useNavigate } from 'react-router-dom';
function GroupRules({onClose}) {
  const { loginData, userData,handleSignIn } = useContext(LoginContext);
  const navigate = useNavigate()
  const handleclose  = ()=>{
    navigate(-1)
    navigate("/")
  }

  const handalbtn = ()=>{
    if(!userData || !loginData){
      handleSignIn()
    }else{
      onClose()
    }
  }
  

  return (
    <div className='w-screen h-screen fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div  className=' mt-20 md:mt-0  absolute rounded-md bg-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <div onClick={handleclose} className=' text-[30px] text-white font-bold absolute top-[-46px] right-0 '><RxCross2/></div>
        <h1 className=' pl-8 py-4 font-bold text-2xl'>Group Rules:</h1>
        <div className=' font-semibold text-sm md:text-xl text-[#6d28d9]  px-8 pb-16'>
          <li>No Spam/Promotion</li>
          <li>No Political/Religious discussion</li>
          <li>No Assignment Sharing before Deadline Day.</li>
          <li>No Abuse/Bullying/Personal attack</li>
          <li>join your Current Courses Group only</li>
          <li>Login with a student email ID </li>  
        </div>
        <button  onClick={handalbtn} className=' absolute bottom-0 my-2 mr-4 px-5 py-1  right-0  rounded-full text-white font-bold bg-[#6d28d9] '>{!userData || !loginData ? "Login" : "Agree"}</button>
      </div>
    </div>  
  ) 
}

export default GroupRules      