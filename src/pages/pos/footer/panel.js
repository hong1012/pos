/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'
import { Button } from 'antd';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.pickUp = this.pickUp.bind(this);
  }

  componentDidMount() {
  }

  pickUp(e) {
  }

  handleMenuClick(e) {
    console.log('click', e);
  }

  render() {
    let vip = this.props.vip;
    return (
      <div className="footer-panel">
        <div className="g-fr">
          <Button type="ghost">计算促销</Button>
          <Button type="ghost" className="btn-submit">结算</Button>
        </div>
      </div>
    )
  }
}

export default Panel;

