import React from "react";

const Win10Desktop: React.FC = () => {
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/desktopFrom.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "inherit"
    // 其他样式属性...
  };
  return (
    <div className="win10-desktop" style={{"height": "100%",}}>
     <div style={styles}></div>
   </div>
  );
}
export default Win10Desktop