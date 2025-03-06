import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

export class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustoerService = new ListCustomersService()

    const customers = await listCustoerService.execute()

    reply.send(customers)
  }
}