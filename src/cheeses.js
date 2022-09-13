let faunadb = require('faunadb');
let client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});
let q = faunadb.query;

client;

module.exports.handler = async (event, context) => {
  try {
    const cheeseList = await client.query(q.Paginate(q.Match(q.Index('cheeses'))));

    return { statusCode: 200, body: JSON.stringify(cheeseList) };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
