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
    // mongo method - zzPOC.projects.findOne() ### do we need this? may not be necessary
    // singleProject(parent, { input }, context, info){
    //   console.log(input._id)
    // },
    productSelection(){},
  },

  Mutation: {
    addProject(_, { input }){
      // insantiate a new Project model passing input as the args
      const newProject = new Project({...input});
      // console.log(newProject)
      // saves the instance to the database
      return newProject.save()
        .then (result => {
            console.log(result)
            return { ...result._doc }
          })
        .catch (err => {
            console.error(err)
          })
    },
    editProject(){},
    deleteProject(){},
    editOrder(){}
  },

  // Project: {
  //   order(){}
  // }
}