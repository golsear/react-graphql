const express = require('express');
//const expressGraphQL = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
//var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

/* app.use('graphql', expressGraphQL({
    schema: schema,
    graphiql: true
})); */

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

app.listen(4000, () => {
    console.log('Listening');
});



