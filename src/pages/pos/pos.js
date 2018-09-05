/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'

import {Button, Table} from 'antd'
import {columns, tbData} from './config'
import {withRouter} from 'react-router-dom'
import { Redirect  } from 'react-router';
import { apiCard  } from '../../utils/api';
// import axios from 'axios'

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: false
    };

    this.pickUp = this.pickUp.bind(this);
    this.search = this.search.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  search() {
    apiCard.getAllStore().then(res => {
      console.log(res);
    });
    /*let url = 'https://douban.uieee.com/v2/book/1220562';
    axios.get(url)
      .then(function(response){
        console.log(response);
      })
      .catch(function(err){
        console.log(err);
      });*/
  }

  pickUp(e) {
/*    this.setState({
      loading: true
    });
    this.getData();*/
    this.props.history.push('/setting');
  }


  getData() {
    this.setState({
      loading: false,
      dataSource: tbData
    });
  }

  render() {
    var bpage=false;
    var bRedirect=false;
    if (bRedirect) {
      return (<Redirect to="/setting" />)
    } else
    return (
      <div >
        <Button type="primary" onClick={this.search}>查询</Button>
        <Button type="primary" onClick={this.pickUp}>挂单</Button>
        <Button type="primary" onClick={this.pickUp}>清空商品</Button>
        <Table pagination={bpage}  rowKey="id" loading={this.state.loading}
          dataSource={this.state.dataSource} columns={columns} />
      </div>
    )
  }
}

export default withRouter(Pos);

