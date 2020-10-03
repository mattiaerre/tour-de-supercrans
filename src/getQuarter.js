import moment from 'moment';

function getQuarter(input) {
  const now = moment(input);
  const month = now.month();
  const year = now.year();

  let first;
  let last;
  let text;
  switch (month) {
    case 0:
    case 1:
    case 2:
      first = '01';
      last = '03';
      text = 'Q1';
      break;
    case 3:
    case 4:
    case 5:
      first = '04';
      last = '06';
      text = 'Q2';
      break;
    case 6:
    case 7:
    case 8:
      first = '07';
      last = '09';
      text = 'Q3';
      break;
    default:
      first = '10';
      last = '12';
      text = 'Q4';
      break;
  }

  const quarter = {
    first: moment(`${year}-${first}-01`).format('YYYY-MM-DD'),
    last: moment(`${year}-${last}-15`).endOf('month').format('YYYY-MM-DD'),
    text,
    year
  };

  return quarter;
}

export default getQuarter;
