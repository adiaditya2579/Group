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
      <div  className=' mt-20 md:mt-0  absolute rounded-md bg-[#6d28d9] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <div onClick={handleclose} className=' text-[30px] text-white font-bold absolute top-[-46px] right-0 '><RxCross2/></div>
        <h1 className=' pl-8 py-4 font-bold text-2xl text-white'>AceGrade Study Group Rules:</h1>
        <div className=' font-semibold text-sm md:text-xl text-white  px-8 pb-16'>
          <li>Join Your Current Subject Group only (<i>No More Then 4 Group</i>)</li>
          <li>No Sharing/Spam of Link (<i>internship</i>)</li>
          <li>No off-Topic discussion</li>
          <i>(Specially Political/ideological/Religious)</i>
          <li>No Answer Sharing before Deadline Day !!</li>
          <li>No Hate Speech/Abuse/Bullying</li>
          <li>To join the study group, login with a student email ID is preferred</li>  
        </div>
        <button  onClick={handalbtn} className=' absolute bottom-0 my-2 mr-4 px-5 py-1  right-0  rounded-full text-black font-bold bg-white '>{!userData || !loginData ? "Login" : "Agree"}</button>
      </div>
    </div>  
  ) 
}

export default GroupRules      