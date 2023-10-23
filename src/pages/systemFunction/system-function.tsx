import React from "react";
import { Image } from "antd";
import "./system-function.scss";
const SystemFunction: React.FC = () => {
  return (
    <div className="system-function">
      <div> 
      <Image width="70%" src="/function.png" />
      </div>
      <h2>
        Windows操作系统是由微软公司开发的一款广泛使用的计算机操作系统。它提供了各种功能和工具，使得计算机用户能够轻松地完成各种任务。以下是Windows操作系统的一些主要功能：
      </h2>
      <p>
        1.用户界面：Windows提供了直观的图形用户界面（GUI），使得用户可以通过鼠标、键盘等设备与计算机进行交互。用户可以通过图形化界面来打开应用程序、文件夹、浏览器等，并进行文件管理、系统设置等操作
      </p>
      <p>
        2.多任务处理：Windows操作系统允许用户同时运行多个程序，用户可以轻松地在不同的应用程序之间切换，同时进行多项任务。
      </p>
      <p>
        3.网络连接：Windows操作系统提供了网络连接功能，使得用户可以轻松地连接到互联网并进行文件共享、远程桌面等操作。
      </p>
      <p>
        4.系统维护：Windows操作系统提供了各种工具和功能，如磁盘清理、磁盘碎片整理、系统备份和还原等，以帮助用户维护和管理自己的计算机系统。
      </p>
      <p>
        5.应用程序支持：Windows操作系统支持大量的应用程序，包括办公软件、娱乐软件、游戏等，使得用户可以根据自己的需要来选择和使用不同的应用程序。
      </p>
      <p>
        6.总之，Windows操作系统提供了丰富的功能和工具，使得用户可以方便地完成各种任务，并且具有良好的兼容性和易用性。
      </p>
    </div>
  );
};
export default SystemFunction;
