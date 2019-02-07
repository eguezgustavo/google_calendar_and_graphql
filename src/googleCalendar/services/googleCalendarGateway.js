export class GoogleCalendarGateway {

    formatDate(dateAsString) {
        return new Date(dateAsString).toISOString().split('.')[0] + 'Z';
    }

    parseEventsResponse(googleEventsResponse) {
        const googleEvents = googleEventsResponse.data.items;

        return googleEvents.map((googleEvent) => ({
            id: googleEvent.id,
            title: googleEvent.summary,
            start: this.formatDate(googleEvent.start.dateTime),
            end: this.formatDate(googleEvent.end.dateTime),
            details: googleEvent.description
        }));
    }
}