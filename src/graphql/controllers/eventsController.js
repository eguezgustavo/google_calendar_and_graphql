export class EventsController {

    constructor(googleCalendarConnection, googleCalendarGateway) {
        this.googleCalendarConnection = googleCalendarConnection;
        this.googleCalendarGateway = googleCalendarGateway;

        this.resolve = this.resolve.bind(this);
    }

    async resolve(_, {start, end}) {
        const eventsResponse = await this.googleCalendarConnection.getEvents(start, end);
        return this.googleCalendarGateway.parseEventsResponse(eventsResponse);
    }

}
