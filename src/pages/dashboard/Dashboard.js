import React from 'react';
import { Row, Col, Progress, Table, Label, Input } from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className='page-title'>
          Dashboard &nbsp;
          <small>
            <small>The Lucky One</small>
          </small>
        </h1>

        <Row>
          <Col lg={8}>
            <Widget className='bg-transparent'>
              <Map />
            </Widget>
          </Col>

          <Col lg={4}>
            <Widget
              className='bg-transparent'
              title={
                <h5>
                  <span className='fw-semi-bold'>Статистика по городам</span>
                </h5>
              }
              settings
              refresh
              close
            >
              <p>
                <span className='circle bg-default text-white'>
                  <i className='fa fa-map-marker' />
                </span>{' '}
                &nbsp; 87 регионов, 2759 городов
              </p>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Элиста</h6>
                  <Progress
                    color='primary'
                    value='40'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={40} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Краснодар</h6>
                  <Progress
                    color='danger'
                    value='36'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={36} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Саратов</h6>

                  <Progress
                    color='success'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={24} />%
                    </small>
                  </span>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget title={<h6> Предыдущее событие </h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Дата</h6>
                  <p className='value'>17 Ноября 2020</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Время</h6>
                  <p className='value'>13:30</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6> Следующиее событие </h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Дата</h6>
                  <p className='value'>30 Октября 2020</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Время</h6>
                  <p className='value'>10:38</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6> RANDOM VALUES </h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name fs-sm'>Overcome T.</h6>
                  <p className='value'>104.85%</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name fs-sm'>Takeoff Angle</h6>
                  <p className='value'>14.29&deg;</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name fs-sm'>World Pop.</h6>
                  <p className='value'>7,211M</p>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  <span className='badge badge-success'>Новые</span> Сообщения
                </h6>
              }
              refresh
              close
            >
              <div className='widget-body undo_padding'>
                <div className='list-group list-group-lg'>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA2}
                        alt='...'
                      />
                      <i className='status status-bottom bg-success' />
                    </span>
                    <div>
                      <h6 className='m-0'>Chris Gray</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Hey! What&apos;s up? So many times since we
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA4}
                        alt='...'
                      />
                      <i className='status status-bottom bg-success' />
                    </span>
                    <div>
                      <h6 className='m-0'>Jamey Brownlow</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Good news coming tonight. Seems they agreed to proceed
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA1}
                        alt='...'
                      />
                      <i className='status status-bottom bg-default' />
                    </span>
                    <div>
                      <h6 className='m-0'>Livia Walsh</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Check my latest email plz!
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA5}
                        alt='...'
                      />
                      <i className='status status-bottom bg-danger' />
                    </span>
                    <div>
                      <h6 className='m-0'>Jaron Fitzroy</h6>
                      <p className='help-block text-ellipsis m-0'>
                        What about summer break?
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className='bg-widget-transparent mt'>
                <input
                  type='search'
                  className='form-control form-control-sm bg-custom-dark border-0'
                  placeholder='Search'
                />
              </footer>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  {' '}
                  Market <span className='fw-semi-bold'>Stats</span>
                </h6>
              }
              close
            >
              <div className='widget-body'>
                <h3>$720 Earned</h3>
                <p className='fs-mini text-muted mb mt-sm'>
                  Target <span className='fw-semi-bold'>$820</span> day earnings
                  is <span className='fw-semi-bold'>96%</span> reached.
                </p>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size='sm'>
                  <thead className='no-bd'>
                    <tr>
                      <th>
                        <div className='checkbox abc-checkbox'>
                          <Input
                            className='mt-0'
                            id='checkbox210'
                            type='checkbox'
                            onClick={() => this.checkTable(0)}
                            checked={this.state.checkedArr[0]}
                            readOnly
                          />{' '}
                          <Label for='checkbox210' />
                        </div>
                      </th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='checkbox abc-checkbox'>
                          <Input
                            className='mt-0'
                            id='checkbox212'
                            type='checkbox'
                            onClick={() => this.checkTable(1)}
                            checked={this.state.checkedArr[1]}
                            readOnly
                          />{' '}
                          <Label for='checkbox212' />
                        </div>
                      </td>
                      <td>HP Core i7</td>
                      <td className='text-align-right fw-semi-bold'>$346.1</td>
                    </tr>
                    <tr>
                      <td>
                        <div className='checkbox abc-checkbox'>
                          <Input
                            className='mt-0'
                            id='checkbox214'
                            onClick={() => this.checkTable(2)}
                            type='checkbox'
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for='checkbox214' />
                        </div>
                      </td>
                      <td>Air Pro</td>
                      <td className='text-align-right fw-semi-bold'>$533.1</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div
                className='widget-body mt-xlg chart-overflow-bottom'
                style={{ height: '100px' }}
              >
                <Rickshaw height={100} />
              </div>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6>Календарь</h6>}
              settings
              close
              bodyClass={'pt-2 px-0 py-0'}
            >
              <Calendar />
              <div className='list-group fs-mini'>
                <button className='list-group-item text-ellipsis'>
                  <span className='badge badge-pill badge-primary float-right'>
                    6:45
                  </span>
                  Записать цели на неделю
                </button>
                <button className='list-group-item text-ellipsis'>
                  <span className='badge badge-pill badge-success float-right'>
                    9:41
                  </span>
                  Просмотреть новый курс
                </button>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;