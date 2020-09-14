import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
// import { StyledDiv } from "../styles/style";

const ServicesNav = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{
          lineHeight: "64px",
          backgroundColor: "#fff",
          display: "flex",
    
          justifyContent: "space-between",
        }}
      >
        <Menu.Item key="fa-rotate-180" style={{ color: "#fff" }}>
          <Link to="/services/daycare"> Day Care</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: "#fff" }}>
          <Link to="/services/walks">Walks</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ color: "#fff" }}>
          <Link to="/services/boarding">Boarding</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{ color: "#fff" }}>
          <Link to="/services/grooming"> Grooming</Link>
        </Menu.Item>
        <Menu.Item key="5" style={{ color: "#fff" }}>
          <Link to="/services/boarding">Boarding</Link>
        </Menu.Item>
        <Menu.Item key="6" style={{ color: "#fff" }}>
          <Link to="/services/retreats"> Retreats</Link>
        </Menu.Item>
        <Menu.Item key="7" style={{ color: "#fff" }}>
          <Link to="/services/puppyclasses"> Puppy Classes</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default ServicesNav;
