const axios = require('axios');
const Project = require('../models/projectModels');


module.exports = {

  // mongo method - zzPOC.projects.find()
  Query: {
    projects(parent, { input }, context, info){
      // console.log(input)
      if (input === undefined) {
        return Project.find()
          .catch(err => console.error(err))
      };
      if (input.orderState) {
        console.log(input.orderState)
        return Project.find({
          orderState: input.orderState
        })
        .catch(err => console.error(err));
      };
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