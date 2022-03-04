const Project = require('../models/projectModels');
// const { elephant } = require('../server');

module.exports = {
  Query: {
    projects(parent, { input }, context, info){
      console.log( 'PROJECTS query triggered <=======');  
      if (input === undefined) {
        return Project.find()
          .catch(err => console.error(err))
      };
      if (input.orderState) {
        return Project.find({
          orderState: input.orderState
        })
        .catch(err => console.error(err));
      };
    },

    products(parent, { input }, context, info){
      console.log( '=======> products query triggered <=======');  

      elephant.query('SELECT * FROM products', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        // console.log(result)
        
        elephant.end();
      });
    },
  },

















  Mutation: {
    addProject(_, { input }){
      const newProject = new Project({...input});
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
};