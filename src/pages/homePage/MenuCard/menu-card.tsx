import React from "react";
import { Button, Card, Space } from "antd";
import "./menu-card.scss";
import { useNavigate } from "react-router-dom";
import { getRouterPath } from "../../../router/route-service.tsx";

const MenuCard: React.FC<any> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Space direction="vertical" size="middle" align="center">
      <Card
        onClick={() => {
          navigate(getRouterPath('SideLayout') + getRouterPath(item.key));
        }}
        title={item.label}
        className="menu-card"
        extra={<Button>更多</Button>}
      >
        {item?.subtitle?.map((sub, id) => (
          <p key={id}>{sub}</p>
        ))}
      </Card>
    </Space>
  );
};
export default MenuCard;
