import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import Loader from "../Loader/Loader";
import HeaderNav from "../HeaderNav/HeaderNav";

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <HeaderNav />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            marginTop: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Movies ©{new Date().getFullYear()} Created by Viktoriia Yakymovych
      </Footer>
    </Layout>
  );
};
export default AppLayout;
