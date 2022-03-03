import React from "react";
import bg from "../../assets/footer-bg.jpg";
import { PageHeaderContainer } from "./PageHeader.Elements";

const PageHeader = (props) => {
  return (
    <PageHeaderContainer background={bg}>
      <h2>{props.children}</h2>
    </PageHeaderContainer>
  );
};

export default PageHeader;
