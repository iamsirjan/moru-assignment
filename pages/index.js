import CardComponent from "../component/Card";
import styles from "../styles/Home.module.css";
import { Col, Divider, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import actions from "../redux/user/actions";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUsers());
    console.log("aaaa");
  }, []);
  const data = useSelector((state) => state?.user);
  console.log(data);

  const style = {
    padding: "15px 0",
  };
  return (
    <div className={styles.container}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data?.allUsers?.map((data, i) => (
          <Col
            key={i}
            className="gutter-row"
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <div style={style}>
              <CardComponent
                user={data?.name}
                number={data?.phone}
                email={data?.email}
                website={data?.website}
                id={data?.id}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
