import React from "react";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;
interface Props { }

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header style={{ marginTop: "4rem" }}>
        <nav>
          <Row justify="center" align="middle">
            <Col>
              <h1
                style={{
                  fontFamily: "'poppins'",
                  fontSize: "6rem",
                  color: 'white',
                  fontWeight:800,
                  letterSpacing:'1px',
                }}
              >
                Quiz
              </h1>
            </Col>
          </Row>
        </nav>
      </header>

      <Content>{children}</Content>
    </>
  );
};
