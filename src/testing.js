let faunadb = require('faunadb');
let client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});
let q = faunadb.query;

client;

module.exports.handler = async (event, context) => {
  try {
    const createP = await client.query(q.Create(q.Collection('cheeses'), { data: { title: 'Camembert' } }));
    console.log(createP);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 200,
  };
};
