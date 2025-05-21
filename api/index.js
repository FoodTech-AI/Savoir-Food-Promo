// api/index.js

const waitlist = require('./waitlist/logic');
const verify = require('./verify/logic');

module.exports = async function (context, req) {
  try {
    const path = req.params ? req.params.path || '' : '';
    
    if (path.includes('verify')) {
      return await verify(context, req);
    } else {
      return await waitlist(context, req);
    }
  } catch (err) {
    context.log.error('API handler error:', err);
    context.res = {
      status: 500,
      body: 'Server error'
    };
  }
};