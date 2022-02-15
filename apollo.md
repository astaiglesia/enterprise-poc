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
> Projects.jsx


```
import { gql, useQuery } from '@react/apollo';

```

- define a query
- 