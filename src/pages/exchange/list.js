/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'

import {Button, Table} from 'antd'
import {columns, tbData} from './config'
import {withRouter} from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    this.pickUp = this.pickUp.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  pickUp(e) {
    this.props.history.push('/exchange/detail/123');
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
        <Button type="ghost" onClick={this.pickUp}>退换货</Button>
        <Table pagination={bpage}  rowKey="billno" loading={this.state.loading}
        dataSource={this.state.dataSource} columns={columns} />
      </div>
    )
  }
}

export default withRouter(List);

