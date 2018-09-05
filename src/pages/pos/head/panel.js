/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'

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
    setTimeout(() => {
      vip.name = '哈哈哈';
    }, 500);
    return (
      <div className="head-panel">
        <span>会员:<span className="blue">{vip.mobile}<span className="g-ml">{vip.name}</span></span></span>
        <span className="g-ml">等级:<span className="blue">{vip.level}</span></span>
        <span className="g-ml">积分:<span className="orange">{vip.point}</span></span>
        <span className="g-ml">金额:<span className="orange">{vip.money}</span></span>
      </div>
    )
  }
}

export default Panel;

