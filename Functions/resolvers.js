var { results } = require('./results')

const resolvers = {

    results(){
      return results
    },
  
   
  addResult:(args)=>{
    try {
      const newId = results.length + 1
      const mult = args.numx * args.numy
      const res = BigInt(mult).toString()
      const resmult = res
      const result = {...args,resmult,id:newId}
      results.push(result)
      return result
    } catch (error) {
      console.log(error)
    }
    
   },
  
  deleteAll(){
    const y = results.length
    for (let i = 0; i < results.length+y; i++) {
      results.shift(results[i])
    }
    console.log(results)
    return results
  }
    
  }

module.exports = {
    resolvers: resolvers,
}