import React from "react";
import HomePage from "./pages/homePage/home-page";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
    const MenuData = [
        {
          id: 1,
          label: "操作系统概述",
          key: "SystemDescription",
          subtitle: ["一:OS的概念和功能", "二:操作系统的特征", "三:操作系统的发展"],
        },
        {
          id: 2,
          label: "操作系统功能",
          key: "SystemFunction",
          subtitle: [
            "一:进程管理功能",
            "二:存储管理功能",
            "三:设备管理功能",
            "四:文件管理功能",
            "五:作业管理功能",
          ],
        },
        {
          id: 3,
          label: "Windos10桌面组成",
          key: "Win10Desktop",
          subtitle: ["Windos10桌面组成"],
        },
        {
          id: 4,
          label: "个性化桌面",
          key: "CustomDesktop",
          subtitle: [
            "桌面个性化即调整结构、布局和感官的Windows终端用户的体验。桌面元素主要包括桌面背景、窗口、鼠标指针等。用户可以通过更改笔记本电脑的桌面，调整字体大小等方式进行桌面显示效果的优化，从而使笔记本电脑更加稳定",
          ],
        },
        {
          id: 5,
          label: "磁盘分区",
          key: "StoragePage",
          subtitle: [
            "磁盘管理是Windows 10中的内置工具，许多电脑用户听说过它。它能够帮助你管理硬盘分区并且不需要重新启动系统或关闭软件，对于Windows 10用户来说，这确实是一款好用的便捷工具",
          ],
        },
        { id: 6, label: "联系", key: "contact", path: "" },
      ];
  return (
    <HomePage/>
  );
}
export default App
