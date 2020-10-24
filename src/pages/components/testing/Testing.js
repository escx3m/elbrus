import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Badge, Button,
} from 'reactstrap';
import classnames from 'classnames';

import s from './Icons.module.scss';

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <section className={`${s.root} mb-4`}>
        <h1 className="page-title">Тестирование</h1>

        {/* tabs */}
        <Nav className="bg-transparent" tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <span className="mr-xs">Аналитика</span>
              <Badge color="primary">new</Badge>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span className="mr-xs">Программирование</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="mr-xs">Дизайн</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <span>Финансы</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <span>Мотивация</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              <span>Маркетинг</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              <span>SMM</span>
            </NavLink>
          </NavItem>
        </Nav>

        {/* tab content */}

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #2 */}
          <TabPane tabId="2">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #3 */}
          <TabPane tabId="3">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #4 */}
          <TabPane tabId="4">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #5 */}
          <TabPane tabId="5">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #6 */}
          <TabPane tabId="6">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #7 */}
          <TabPane tabId="7">
            <div>
              <Row className="icon-list">

                <Col md={4} lg={3} xs={12} className="list-item">Дата</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Время</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Тема</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Действие</Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

                <Col md={4} lg={3} xs={12} className="list-item">24 ноября 2020</Col>
                <Col md={4} lg={3} xs={12} className="list-item">10:00</Col>
                <Col md={4} lg={3} xs={12} className="list-item">Уроки лидерства</Col>
                <Col md={4} lg={3} xs={12} className="list-item"><Button color="info" id="show-success-message">Записаться</Button></Col>

              </Row>
            </div>
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default Testing;
