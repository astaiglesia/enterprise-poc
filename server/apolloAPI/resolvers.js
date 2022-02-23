const axios = require('axios');
const Project = require('../models/projectModels');


module.exports = {

  // mongo method - zzPOC.projects.find()
  Query: {
    projects(parent, { input }, context, info){
      // console.log(input)
      if (input === undefined) {

        // invoke find method on the model to be fetched
        return Project.find()
          // .then( project => {
          //   console.log('================>')
          //   console.log(project);
          //   return project
          // })
          .catch(err => console.error(err))
        // axios.get(`http://localhost:3000/projects/`)
        //   .then(res => res.data);
      };
      // if (input.orderState) {
      //   return axios.get(`http://localhost:3000/projects?orderState=${input.orderState}`)
      //     .then(res => res.data);
      // };
    },
    // mongo method - zzPOC.projects.findOne()
    singleProject(){},
    productSelection(){},
  },

  Mutation: {
    // assume id is assigned by database - use unique id generator if needed
    // mongo method - zzPOC.projects.insert()
    addProject(_, { input }){
      // insantiate a new Project model passing input as the args
      const newProject = new Project({...input});

      // saves the instance to the database
      return newProject.save()
        .then (result => {
            console.log(result)
            return { ...result._doc }
          })
        .catch (err => {
            console.error(err)
          })
        //   axios.post(`http://localhost:3000/projects/`, {...input})
        // .then(res => res.data);
    },
    editProject(){},
    deleteProject(){},
    editOrder(){}
  },

  // Project: {
  //   order(){}
  // }
}