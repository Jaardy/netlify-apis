const httpType = ({ httpMethod, path, body }) => {
  if (httpMethod === 'GET') {
    return path.length > 28 ? 'single' : 'all';
  }
  if (httpMethod === 'POST') {
    return 'post' + body;
  }
  if (httpMethod === 'PUT') {
    return 'put logic';
  }
};

module.exports.handler = async (event, context) => {
  console.log(httpType(event));
  return { statusCode: 200 };
};
