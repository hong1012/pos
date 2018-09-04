/**
 * Created by hong on 2018/9/3.
 */
const columns = [
  {
    title: '单据编号 ',
    dataIndex: 'billno',
    key: 'billno'
  },
  {
    title: '单据日期 ',
    dataIndex: 'date'
  },

  {
    title: '金额 ',
    dataIndex: 'money'
  }
];

const tbData = [
  {'billno': 'NO12301', 'date': '2018-09-03', 'money': 234},
  {'billno': 'NO12302', 'date': '2018-09-04', 'money': 300}
]

export {columns, tbData}
