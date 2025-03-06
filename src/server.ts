import Fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = Fastify({ logger: true })
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

app.listen({ port: 3333 }, () => {
  console.log("🚀 A API está funcionando na porta 3333!")
})