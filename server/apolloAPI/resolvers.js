const axios = require('axios');

module.exports = {
  Query: {
    projects(_, { input }){
      // console.log(input)
      if (input === undefined) {
        return axios.get(`http://localhost:3000/projects/`)
          .then(res => res.data);
      };
      if (input.orderState) {
        return axios.get(`http://localhost:3000/projects?orderState=${input.orderState}`)
          .then(res => res.data);
      };
    },
    singleProject(){},
    productSelection(){},
  },

  Mutation: {
    // assume id is assigned by database - use unique id generator if needed
    addProject(_, { input }){
      console.log(input)

      return axios.post(`http://localhost:3000/projects/`, {...input})
        .then(res => res.data);
    },
    editProject(){},
    deleteProject(){},
    editOrder(){}
  },

  // Project: {
  //   order(){}
  // }
}