import React from 'react'
import { LiaLinkedinIn } from "react-icons/lia";
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";



function Footer() {
    const handleyoutube = ()=>{
        window.open('https://youtube.com/@AceGrade-Channel','_blank')
    }
    const handlelinkedin = ()=>{
        window.open('https://www.linkedin.com/company/ace-grade/','_blank')
    }
    const handleemail = ()=>{
        window.open(`mailto:"acegrade.webops@gmail.com"`,'_blank')
    }
    const handalwhatsapp = ()=>{
        window.open('https://chat.whatsapp.com/B85v1TPhodM80pFveBgM5n','_blank')
    }

  return (
    <>
            <div className=' w-full h-auto bg-black text-white sm:flex p-8'>

            
                <div className="w-[50%] h-full  sm:relative sm:left-[20%] text-2xl font-semibold">
            
                        <h1>Get in Touch</h1>
                        <div className='flex text-[24px] gap-2 my-3 '>
                            <AiOutlineYoutube className=' cursor-pointer' onClick={handleyoutube}/>
                            <LiaLinkedinIn className=' cursor-pointer' onClick={handlelinkedin} />
                            <RiWhatsappLine className=' cursor-pointer' onClick={handalwhatsapp}/>
                            <MdOutlineEmail className=' cursor-pointer' onClick={handleemail}/>
                        </div>

                    
                </div>
                
                <div className="w-[50%] h-full  sm:mt-0 mt-12">
                    <h1 className=' tracking-[7px] mb-4'>CONTACT</h1>
                    <a className=' cursor-pointer'>acegrade.webops@gmail.com</a>
                    <div className='w-32 h-auto py-2 my-4  flex justify-center items-center gap-1 bg-white text-black rounded-full cursor-pointer'onClick={handalwhatsapp}>
                        <RiWhatsappLine className=' font-bold text-[28px]' />
                        <p className=' font-bold'>Let's Chat</p>
                    </div>

                </div>

            </div>
            <div className=' w-full h-auto py-3 bg-black text-white text-xs text-nowrap flex flex-col items-center sm:text-[15px]'>
        
            </div>

        </>
  )
}

export default Footer;
