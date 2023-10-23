import React, { useContext } from "react";
import { Button, Layout, Space } from "antd";
import "./homepage.scss";
import MenuCard from "./MenuCard/menu-card.tsx";
import ContextData from "../../../src/context/data.jsx";
const { Header, Footer, Sider, Content } = Layout;

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

const HomePage: React.FC<any> = () => {
  const menuData: [] = useContext(ContextData)?.['menuData'] || [];
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <div className="header">
            <span>Windos10 操作系统教程</span>
          </div>
        </Header>
        <Content style={contentStyle}>
          { menuData?.map((data) => {
            return <MenuCard key={data['id']} item={data} />;
          })}
        </Content>
        <Footer style={footerStyle}>
          <div className="footer">
            <Button type="primary">帮助</Button>
            <Button type="primary">退出</Button>
          </div>
        </Footer>
      </Layout>
    </Space>
  );
};
export default HomePage;
