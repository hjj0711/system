import React from "react";
import "./system-description.scss";
const SystemDescription: React.FC = () => {
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/system-des-back.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // 其他样式属性...
  };
  return (
    <div className="system-description" style={styles}>
      <h1>操作系统概述</h1>
      <div className="text-box">
        <h2>一: OS的概念和功能</h2>
        <p>
          操作系统（OS）是一种软件，它管理计算机硬件和软件资源，并提供用户与计算机系统之间的接口。它的主要功能包括进程管理、内存管理、文件系统管理和设备驱动程序管理。操作系统负责协调和分配计算机资源，确保各个程序能够正确运行，并提供用户友好的界面，使用户能够与计算机交互。
        </p>
        <h2>二: 操作系统的特征</h2>
        <p>
          操作系统具有以下几个特征：<br/>
          多任务处理：操作系统能够同时运行多个程序，并合理分配计算机资源，使多个程序能够共享计算机的处理能力。<br/>
          虚拟化：操作系统可以通过虚拟化技术将物理资源（如处理器、内存）划分为多个逻辑单元，从而提高资源利用率。<br/>
          安全性：操作系统提供安全机制，保护计算机系统免受恶意软件和未授权访问的威胁。<br/>
          可靠性：操作系统需要保证计算机系统的稳定性和可靠性，避免系统崩溃或数据丢失。<br/>
          用户界面：操作系统提供不同类型的用户界面，如命令行界面和图形用户界面，以方便用户与计算机进行交互。<br/>
        </p>
        <h2>三: 操作系统的发展</h2>
        <p>
          操作系统经历了多个阶段的发展。早期的操作系统主要是批处理操作系统，用于处理大量的批处理作业。随着计算机技术的发展，出现了分时操作系统，允许多个用户同时访问计算机系统。后来，出现了个人计算机操作系统，如Windows和Mac
          OS，使个人用户能够方便地使用计算机。随着互联网的普及，网络操作系统也得到了广泛应用，支持远程访问和分布式计算。当前，操作系统正朝着更高的性能、更好的安全性和更好的用户体验方向发展。
        </p>
      </div>
    </div>
  );
};
export default SystemDescription;
