import moment from 'moment';

function getPercentage(args) {
  if (args === undefined) {
    throw new Error('"args" cannot be "undefined"');
  }

  const end = moment(args.end);
  const start = moment(args.start);
  const today = moment(args.today);

  const elapsed = today.diff(start, 'days');
  const total = end.diff(start, 'days');

  return Math.round((elapsed / total) * 100);
}

export default getPercentage;
