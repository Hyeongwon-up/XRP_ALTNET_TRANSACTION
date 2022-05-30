
const xrpl = require('xrpl')

async function main() {


    const xrp_host = process.env.XRP_NODE_HOST
    console.log(xrp_host)

    // Define the network client
    const client = new xrpl.Client(xrp_host)
    await client.connect()
  
    // ... custom code goes here
  
    // Disconnect when done (If you omit this, Node.js won't end the process)
    client.disconnect()
  }
  require("dotenv").config();

  main()