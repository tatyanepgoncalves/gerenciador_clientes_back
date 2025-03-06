import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

export class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const customerService = new DeleteCustomerService();

    const customer = await customerService.execute({ id });

    reply.send(customer);
  }
}
