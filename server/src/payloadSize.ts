import * as bodyParser from 'body-parser';

export const largeBodyParser = bodyParser.json({
  limit: '15mb',
});