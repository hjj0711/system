import React from "react";
import { Layout, Space } from "antd";
import "./homepage.scss";
import MenuCard from "./MenuCard/menu-card.tsx";

const { Header, Footer, Sider, Content } = Layout;
const MenuData = [
  { id: 1, name: "操作系统概述", path: "" },
  { id: 2, name: "操作系统功能", path: "" },
  { id: 3, name: "Windos10桌面组成", path: "" },
  { id: 4, name: "个性化桌面", path: "" },
  { id: 5, name: "磁盘分区", path: "" },
  { id: 6, name: "联系", path: "" },
];

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: "20vh",
  paddingInline: 50,
  backgroundColor: "#7dbcea",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "70vh",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: "10vh",
  backgroundColor: "#7dbcea",
};

const HomePage: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <div className="header">
          <span>Windos10 操作系统教程</span>
        </div>
      </Header>
      <Content style={contentStyle}>
        {MenuData.map((data) => {
          return <MenuCard key={data.id} item={data} />;
        })}
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);

export default HomePage;
