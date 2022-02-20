const axios = require('axios');

module.exports = {
  Query: {
    projects(parentvalue, args){
      console.log(args.input)
      if (args.input === undefined) {
        return axios.get(`http://localhost:3000/projects/`)
          .then(res => res.data);
      };
      if (args.input.orderState) {
        return axios.get(`http://localhost:3000/projects?orderState=${args.input.orderState}`)
          .then(res => res.data);
      };
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