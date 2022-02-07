const express = require('express');
//const expressGraphQL = require('express-graphql');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
/* var schema = buildSchema(`
  type Query {
    hello: String
  }
`); */

// The root provides a resolver function for each API endpoint
/* var root = {
    hello: () => {
      return 'Hello world!';
    },
  }; */


const app = express();

/* app.use('graphql', expressGraphQL({
    graphiql: true
})); */

app.use('/graphql', graphqlHTTP({
    //schema: schema,
    //rootValue: root,
    graphiql: true,
  }));

app.listen(4000, () => {
    console.log('Listening');
});



