/**
 * Created by hong on 2018/9/3.
 */
const columns = [
  {
    title: '商品id ',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '商品名称 ',
    dataIndex: 'name',
  },
  {
    title: '商品名称 ',
    dataIndex: 'code'
  },
  {
    title: '数量 ',
    dataIndex: 'qty'
  },
  {
    title: '单价 ',
    dataIndex: 'price'
  },
  {
    title: '金额 ',
    dataIndex: 'money'
  }
];

const tbData = [
  {'id': 1, 'name': '可乐', 'code': '001', 'qty': 10, 'price': 23.4, 'money': 234},
  {'id': 2, 'name': '雪碧', 'code': '002', 'qty': 20, 'price': 15, 'money': 300}
]

export {columns, tbData}
