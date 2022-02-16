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

- define a query
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