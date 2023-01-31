import React, { PropsWithChildren } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Header from "../../containers/Header/Header";
import Card from "../../components/UI/Card/Card";
import styles from './Layout.module.css';

const Layout = (props: PropsWithChildren) : JSX.Element => {
  return (
    <Wrapper>
      <Header></Header>
      <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
        <Card classes={[styles.Content]}>
          {props.children}
        </Card>
      </div>
    </Wrapper>
  );
};

export default Layout;