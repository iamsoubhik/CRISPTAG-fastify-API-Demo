// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (req, res) => {
    return { hello:"This is a landing page of this api" } // create jst to show a landing page of the route
  })

fastify.get('/g', async (req, res) => {   //As per question https://localhost/g redirect google.com
    res.redirect ("http://google.com");
  });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()