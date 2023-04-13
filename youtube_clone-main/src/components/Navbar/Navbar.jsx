import React from 'react'
import "./nav.css"
import profile from "../../images/profile.jpg"
const Navbar = () => {
  return (
    <div>
      <div id="navbar">
      <div id="left-side">
        <i class="fa fa-bars" aria-hidden="true" id="menu"></i>
        <img
          id="youtube-logo"
          className='w-5 h-5'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="youtube"
          height="20px"
        />
        <p id="logo-text">YouTube</p>
      </div>
      <div id="search-place">
        <input type="text" id="search-input" placeholder="Search" />
        <button id="search-btn">
          <i class="fa fa-search" id="search-icon" aria-hidden="true"></i>
        </button>
      </div>
      <div id="right-side">
        <button id="create-video">
          <i
            class="fa fa-video-camera"
            id="video-camera"
            aria-hidden="true"
          ></i>
        </button>
        <button id="youtube-apps">
          <i class="fa fa-th" id="yt-apps-icon" aria-hidden="true"></i>
        </button>
        <button id="notification">
          <i class="fa fa-bell-o" id="notifi-icon" aria-hidden="true"></i>
        </button>
        <div className="logo ">
        <img className='absolute ring-0 top-3 h-7 w-7 rounded-[50%]' src={profile} alt="logo" />
        </div>
      </div>
    </div>
    <div id="conteiner">
      <div id="left-side-action">
        <div class=" flex gap-2 h-12  ">
          <i class="fa fa-home" aria-hidden="true"></i>
          <p>Home</p>
        </div>
        <div class=" flex gap-2 h-12  explore-action">
          <i class="fa fa-compass" aria-hidden="true"></i>
          <p>Explore</p>
        </div>
        <div class=" flex gap-2 h-12  shorts-action">
          <i class="fa fa-play" aria-hidden="true"></i>
          <p>Shorts</p>
        </div>
        <div class=" flex gap-2 h-12  subscription-action">
          <i class="fa fa-television" aria-hidden="true"></i>
          <p>Subscriptions</p>
        </div>
        <hr id="left-side-hr" />
        <div class=" flex gap-2 h-12  library-action">
          <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
          <p>Library</p>
        </div>
        <div class=" flex gap-2 h-12  history-action">
          <i class="fa fa-history" aria-hidden="true"></i>
          <p>History</p>
        </div>
        <div class=" flex gap-2 h-12  watch-later-action">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <p>Watch Later</p>
        </div>
        <div class="l flex gap-2 h-12  iked-videos-action">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <p>Liked Videos</p>
        </div>
        <hr id="left-side-hr" />
        <div class=" flex gap-2 h-12  learninigs-action">
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          <p>Learning</p>
        </div>
        <div class=" flex gap-2 h-12  movies-action">
          <i class="fa fa-film" aria-hidden="true"></i>
          <p>Movies</p>
        </div>
        <div class=" flex gap-2 h-12  sports-action">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <p>Sports</p>
        </div>
        <hr id="left-side-hr" />
        <div class=" flex gap-2 h-12  settings-action">
          <i class="fa fa-cog" aria-hidden="true"></i>
          <p>Settings</p>
        </div>
      </div>
      <div id="videos-container"></div>
    </div>
    </div>
  )
}

export default Navbar