import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { Container, Content } from "./styles";
import DashboardIcon from "../../components/icons/Dashboard";
import Seat from "../../components/icons/Seat";
import Student from "../../components/icons/Student";
import Report from "../../components/icons/Report";
import AddUser from "../../components/icons/AddUser";
import Dashboard from "./Dashboard";

const Admin = () => (
  <Container>
    <SideBar
      routes={[
        { title: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
        { title: "Seat", path: "/admin/seat", icon: <Seat /> },
        { title: "Student", path: "/admin/student", icon: <Student /> },
        { title: "Report", path: "/admin/report", icon: <Report /> },
        { title: "Admin", path: "/admin/account", icon: <AddUser /> },
      ]}
    />
    <Content>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </Content>
  </Container>
);

export default Admin;
