import React from 'react';
import { Layout, Button, Row, Col, Divider } from 'antd';
import ReactDOM from 'react-dom';
import './index.scss';

class Home extends React.Component {
  componentWillMount() {
    if (!document.cookie || !sessionStorage.getItem('zjh') || !sessionStorage.getItem('name')) {
      window.location.href = `${window.location.origin}/draven/login`;
    }
  }
  handleClick = target => {
    window.location.href = `${window.location.origin}/draven/${target}`;
  };
  render() {
    const { Header, Content } = Layout;
    const zjh = sessionStorage.getItem('zjh');
    const name = sessionStorage.getItem('name');
    const rowConf = { type: 'flex', justify: 'space-around', style: { padding: '10px 0' } };
    const colConf = { span: 7, className: 'col' };
    return (
      <Layout>
        <Header className="header">
          <strong>{name}</strong>
          <span>{zjh}</span>
        </Header>
        <Content>
          <Row {...rowConf}>
            <Divider>常用功能</Divider>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('grade')} className="button-grade">
                <span>📋</span>成绩
              </Button>
            </Col>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('classroom')} className="button-classroom">
                <span>️🏫</span>教室
              </Button>
            </Col>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('course')} className="button-course">
                <span>📚</span>课程
              </Button>
            </Col>
          </Row>
          <Row {...rowConf}>
            <Divider>其他功能</Divider>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('takecourse')} className="button-takecourse">
                <span>☁️</span>抢课
              </Button>
            </Col>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('bus')} className="button-bus">
                <span>🚌</span>校车
              </Button>
            </Col>
            <Col {...colConf}>
              <Button onClick={() => this.handleClick('calendar')} className="button-calendar">
                <span>📅</span>校历
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
const main = document.getElementById('main');
ReactDOM.render(<Home />, main);
