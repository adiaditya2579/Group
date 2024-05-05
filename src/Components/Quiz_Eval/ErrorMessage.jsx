import React from 'react'
import { RxCross2 } from "react-icons/rx";
function ErrorMessage({onclose}) {

    const Admin = ()=>{
        window.open('https://chat.whatsapp.com/IWMp910ObC79F0isVGWpuG','_black')
    }

  return (
    <div className=' w-screen fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className=' w-[90%] md:mx-40 md:max-w-[500px] md: flex flex-col gap-5 text-white'>
                <div className=' place-self-end'>
                    <button onClick={onclose}><RxCross2 size={30}/></button>
                </div>
                <div className='bg-[#6D28D9] rounded-xl md:px-20 p-10 flex flex-col gap-5'>
                    <div> 
                        <h1 className=' font-bold text-lg'>Question Paper not available</h1>
                    </div>
                    <div> 
                        <h1 className=' font-bold text-lg '>Check Answer transcript or Contact Admin</h1>
                    </div>
                    <div>
                        <button onClick={Admin} className=' font-bold text-white border-2 border-white rounded-full px-6 py-2  hover:bg-white hover:text-black'>Admin</button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ErrorMessage;
