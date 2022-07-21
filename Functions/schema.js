var { buildSchema } = require('graphql')

const schema = buildSchema(`

  type Query{
    results:[results]
  }

  type results{
    numx: String
    numy: String
    resmult: String
    id:ID
  }
  
  type Mutation {
    addResult(
    numx: String!
    numy: String!
    ):results

    deleteAll:[results]
  }
   
`)

module.exports = {
    schema: schema,
}