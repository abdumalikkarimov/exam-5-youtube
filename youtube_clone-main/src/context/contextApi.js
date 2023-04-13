import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext({});
const AppContext = ({children}) => {
  const [videos, setVideos] = useState([]);

  
  useEffect(()=>{
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
  
      params: {
        part: "id,snippet",
        q: "science",
        maxResults: "50",
      },
  
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
  
    const fetchData = async () =>
    {
      axios.request(options).then(function (response) {
        console.log(response.data);
        setVideos(response.data.items);
      }).catch(function (error) {
        console.error(error);
      })
    }
    fetchData()
  },[])
    
const state={
  videos,
  setVideos
}

  
  return (
    <Context.Provider
      value={{
        state
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext