import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

app.register(fastifyCors);

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

app.register(routes);


const start = async () => {
  try {
    app.listen({ port: 3333 }, () => {
      console.log("🚀 A API está funcionando!");
    });
  } catch (err) {
    process.exit(1);
  }
};

start();
