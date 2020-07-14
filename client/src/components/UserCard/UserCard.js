import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./style.css"

const styles = {
  header: {
    background: "#a0d080",
    height: "90px"
  },
  footer: {
    height: "45px",
    background: "#a0d080",
  },
  counts: {
    marginleft: "20px;",
    position: "relative",
    bottom: "70px;"
  },
  img: {
    borderStyle: "solid",
    borderColor: "#bfd730",
    borderRadius: "5px"
  }


}
function UserCard(props) {
  return (
    <div className="card">
      <div clasName="header" style={styles.header}></div>
      <div className="img-container">
        <img className="img" alt="img" src="https://place-hold.it/100x100" style={styles.img} />
      </div>
      <div className="content">
        <div className="username">User Name{props.username}</div>
        <div className="counts">
          <Row>
            <Col md={5}>Posts:{props.postcount}</Col>
            <Col md={5}>Comments:{props.commentcount}</Col>
          </Row>
       
        </div>
       
      <div className="footer" style={styles.footer}></div>
    </div>
    </div>
  );
}


export default UserCard