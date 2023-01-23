let faunadb = require('faunadb');
let client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});
let q = faunadb.query;

const httpAction = ({ httpMethod, path, body }) => {
  if (httpMethod === 'GET') {
    let all = () => client.query(q.Paginate(q.Match(q.Index('cheeses'))));
    return path.length > 28 ? 'single' : all;
  }
  if (httpMethod === 'POST') {
    return 'post' + body;
  }
  if (httpMethod === 'PUT') {
    return 'put logic';
  }
};

module.exports.handler = async (event, context) => {
  try {
    // const cheeseList = await client.query(q.Paginate(q.Match(q.Index('cheeses'))));
    const useDB = httpAction(event);
    console.log(useDB);

    return { statusCode: 200, body: 'JSON.stringify(cheeseList)' };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
