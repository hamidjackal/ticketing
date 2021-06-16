import { Publisher, Subjects, TicketCreatedEvent } from '@httickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}
