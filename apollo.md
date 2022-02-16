# Apollo - React Client

## Install & Setup
```npm install @apollo/client graphql```


> App.js
- we want to wrap our App return in an Apollo Provider with a prop of a Client instance accepting a config object, similar to setting up a Redux store provider

```

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// we can add a proxy prior to deployment
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  
  return (  
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/manage" element={<ManageProject />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </ApolloProvider>
  )
}

```

## Create a Query Component
> ListComponent.jsx


```
import { gql, useQuery } from '@react/apollo';

```

- (assuming a server side query schema exists) define a client-side query
  - if no schema field for your query exists, see below
- use graphiql sandbox to create the query (i.e. all code within the curly brackets)

```
const GET_SNIPPETS = gql`
  query GetSnippets {
    projects {
      id
      orderState
      nickname
      location
      client
      company
      rentalTerm
      tag
    }
  }
`;
```

- useQuery hook within the function component definition

```
/* loading is a boolean - use for a spinner */
const Snippets = ({ onSnippetSelected }) => {
  
  const { loading, error, data } = useQuery(GET_SNIPPETS);

  if(loading) return 'Loading...';
  if(error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <select name="snippet" onChange={onSnippetSelected}>
      {data.projects.map(project => (
        <option key={project.id} value={project.nickname}>
          {project.nickname}
        </option>
      ))}
    </select>
  );
};
```

## Define a server-side query field
> server/schema.js

- in your Root Query (or other QueryType) define a new schema
  - in the example below we will define a schema to filter for entries containing an orderState value of "Draft", "Reserved", etc ...
  - use graphiql to test your query (open the host port your server is configured to listen with the path /graphql)
  e.g. ``` localhost:5000/graphql```
  - also, if you want to quickly create your own sandbox/mock REST api for local dev - look into JSONserver
