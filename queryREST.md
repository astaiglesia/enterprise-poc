# [Querying a REST API with GraphQL](https://www.prisma.io/blog/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d)

## 1. Analyze the data model of the REST API
- understand the shape of the data being returned at the different endpoints
  - read the docs
  - create test GET / Query requests
-translate the data models into SDL
  - define the types, input types, queries and mutations (and subscriptions)

## 2. Define the GQL Schema 
this can be done by either:
- Translate each REST endpoint into a corresponding query
- Tailoring an API more sutiable for the clients

