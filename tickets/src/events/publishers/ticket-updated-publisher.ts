import { Publisher, Subjects, TicketUpdatedEvent } from '@httickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
