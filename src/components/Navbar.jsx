import React from 'react'
import logo from '../assets/YouTube-Logo.png'
import { Bell, Video } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between h-[80px] shadow-md pl-7 p-5'>
            <div className='mt-auto mb-auto'>
                <img className='w-28' src={logo} alt="" />
            </div>
            <label class="input h-10 w-[35%] rounded-full shadow-sm input-bordered flex items-center gap-2">
                <input type="text" class="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path
                        fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
            <div className='flex mt-auto mb-auto gap-5'>
            <Video size={28} />
            <Bell size={28}  />
            </div>
        </div>
    )
}

export default Navbar