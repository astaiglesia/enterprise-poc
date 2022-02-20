const axios = require('axios');

module.exports = {
  Query: {
    projects(parentvalue, args){
      return axios.get(`http://localhost:3000/projects/`)
      .then(res => res.data);
    },
    singleProject(){},
    productSelection(){},
  },

  Mutation: {
    addProject(){},
    editProject(){},
    deleteProject(){},
    editOrder(){}
  },

  // Project: {
  //   order(){}
  // }
}