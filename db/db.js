const mongoose = require('mongoose')

const DB = "mongodb://ramxan31:caspam31@ac-l4ltj1v-shard-00-00.ua4qozf.mongodb.net:27017,ac-l4ltj1v-shard-00-01.ua4qozf.mongodb.net:27017,ac-l4ltj1v-shard-00-02.ua4qozf.mongodb.net:27017/?ssl=true&replicaSet=atlas-ix2xlq-shard-0&authSource=admin&retryWrites=true&w=majority"


mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=> console.log('Database connected')).catch((error) => console.log(`Error: ${error}`))