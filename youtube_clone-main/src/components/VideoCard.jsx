import React, {  useContext } from "react";
import { Context } from "../context/contextApi";
const Video = () => {
    const{state} = useContext(Context)

    return (
        
    <div className="videos relative top-12 left-[230px] grid grid-cols-4 gap-x-4 w-[1270px]">
        {
            state.videos.map((el)=>(
                <div className="block">
                    <img src={el.snippet.thumbnails.high.url} alt="" />
                    <p>{el.snippet.title}</p>
                </div>
            ))
        }
    </div>
    );
};

export default Video;
