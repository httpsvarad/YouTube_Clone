import React, { useEffect, useState } from 'react';
import {
    Home,
    Code,
    Music,
    GraduationCap,
    Mic,
    Film,
    Gamepad2,
    Tv,
    Dumbbell,
    Shirt,
    Smile,
    DollarSign
} from 'lucide-react';
import { fetchData } from '../utils/rapidapi';
import Videocard from './Videocard';

const categories = [
    { name: 'New', icon: <Home /> },
    { name: 'Coding', icon: <Code /> },
    { name: 'ReactJS', icon: <Code /> },
    { name: 'NextJS', icon: <Code /> },
    { name: 'Music', icon: <Music /> },
    { name: 'Education', icon: <GraduationCap /> },
    { name: 'Podcast', icon: <Mic /> },
    { name: 'Movie', icon: <Film /> },
    { name: 'Gaming', icon: <Gamepad2 /> },
    { name: 'Live', icon: <Tv /> },
    { name: 'Sport', icon: <Dumbbell /> },
    { name: 'Fashion', icon: <Shirt /> },
    { name: 'Beauty', icon: <Smile /> },
    { name: 'Gym', icon: <Dumbbell /> },
    { name: 'Crypto', icon: <DollarSign /> },
];

const Sidebar = () => {
    const [category, setCategory] = useState('New');
    const [videos, setVideos] = useState([])

    function handleCategoryClick(selectedCategory) {
        setCategory(selectedCategory);
        console.log('Selected category:', selectedCategory);
        console.log(videos)
    }

    useEffect(() => {
        fetchData(`search?part=snippet&q=${category}`).then((data) =>
            setVideos(data.items)
        );
    }, [category]);

    
    return (
        <div className='flex'>
            <div className="p-5 pt-0 h-[calc(100vh-80px)] w-[20%] overflow-y-scroll">
                {categories.map((elem, index) => (
                    <div
                        onClick={() => handleCategoryClick(elem.name)}
                        key={index}
                        className={`flex items-center gap-2 p-3 rounded-md my-3 cursor-pointer 
                        ${category === elem.name ? 'bg-slate-300' : 'hover:bg-slate-200'}`}
                    >
                        <span>{elem.icon}</span>
                        <h2>{elem.name}</h2>
                    </div>
                ))}
            </div>
            <div className='w-[80%] h-[calc(100vh-80px)] overflow-y-scroll'>
                <h2 className='text-2xl p-5 font-semibold'>{category} Videos</h2>
                <Videocard videoData={videos}/>

            </div>
        </div>
    );
}

export default Sidebar;
