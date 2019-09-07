const dataList = [
  { id: '12331', value: 1400 },
  { id: '123322', value: 800 },
  { id: '12333', value: 1200 }
];

const dataObj = dataList.reduce((obj, { id, value }) => {
  obj[`${id}`] = value;
  //obj[value]=id
  return obj;
}, {});

console.log(dataObj);
