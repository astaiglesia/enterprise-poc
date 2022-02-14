const express = require('express');

const server =  express();


const port = 4000;
server.listen(port, () => console.log(`Express + GraphQL server is live and listening on port ${port}`))