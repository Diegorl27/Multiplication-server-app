const {graphqlHTTP} = require ('express-graphql')
var { schema } = require('./Functions/schema')
var { resolvers } = require('./Functions/resolvers')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

app.use('/graphql',graphqlHTTP({
  graphiql: true,
  rootValue: resolvers,
  schema: schema
})) 

const PORT = 5000
app.listen(PORT, () =>{
  console.log(`Server is Running on PORT ${PORT}`)
})
