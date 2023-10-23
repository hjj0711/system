import React from "react";
import { Player } from "video-react";

import './custom-desktop.scss'

const CustomDesktop: React.FC = () => {

  return (
    <div className="custom-desktop">
      <h2>
        The web video player built from the ground up for an HTML5 world using
        React library. {"\u2728"}
      </h2>
      <Player playsInline >
        <source src="/customvideo.mp4" type="video/mp4" />
      </Player>
    </div>
  );
};
export default CustomDesktop;
