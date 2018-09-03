/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'

import {Button, Table} from 'antd'
import {columns, tbData} from './config'

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: false,
      startDate: '2016-12-15',
      endDate: '2016-12-23'
    };

    this.handleClick = this.pickUp.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  pickUp(e) {
    this.setState({
      loading: true
    });
    this.getData();
  }


  getData() {
    this.setState({
      loading: false,
      dataSource: tbData
    });
  }

  render() {
    var bpage=false;
    return (
      <div >
        <Button type="ghost" onClick={this.pickUp}>挂单</Button>
        <Button type="ghost" onClick={this.pickUp}>清空商品</Button>
        <Table pagination={bpage}  rowKey="id" dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
      </div>
    )
  }
}

export default Pos;

