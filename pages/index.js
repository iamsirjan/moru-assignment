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
  }, []);
  const data = useSelector((state) => state?.user);

  const style = {
    padding: "15px 0",
  };
  return (
    <div className={styles.container}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* mapping the user data into the card component */}
        {data?.allUsers?.map((userdata, i) => (
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
                keyid={i}
                allUserData={data?.allUsers}
                data={userdata}
                user={userdata?.name}
                number={userdata?.phone}
                email={userdata?.email}
                website={userdata?.website}
                id={userdata?.id}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
