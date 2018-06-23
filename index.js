import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is cool!');
});

const rootValue = {
  friend: () => {
    return {
      id: 1,
      firstName: 'James',
      lastName: 'G',
      gender: 'Male',
      language: 'English',
      email: 'me@me.com'
    };
  }
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));
