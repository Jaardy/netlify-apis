exports.handler = async (event) => {
  //   console.log(event.headers);
  console.log('auth', event.headers.authorization);
  const [type, token] = event.headers?.authorization.split(' ') || ['', ''];
  if (!event.headers.authorization || token != 'dXNlcjpwYXNz') {
    return {
      statusCode: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    };
  }
  //   let [type, encoded] = event.headers.authorization.split(' ');
  //   if (encoded === 'bXVsdGl2ZXJzZTptdWx0aXZlcnNl') {
  const subject = event.queryStringParameters.name || 'World';
  return {
    statusCode: 200,
    body: `Hello, ${subject}!`,
  };
  //   }
};
