import React from 'react'

const Videocard = ({ videoData }) => {
   


    return (

        <div className='flex flex-wrap'>
            {videoData.map((elem)=>{
                
                return(
                    <div className='w-[250px] m-5'>
                        <div>
                            <img className='rounded-lg' src={elem.snippet.thumbnails.medium.url} alt="" />
                        </div>
                        <div>
                            <h2 className='mt-2'>{elem.snippet.title}</h2>
                        </div>

                    </div>
                )

            })}
        </div>
    )
}

export default Videocard