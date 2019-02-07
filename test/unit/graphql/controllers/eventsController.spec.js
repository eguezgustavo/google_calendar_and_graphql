import {expect} from 'chai';
import sinon from "sinon";
import {EventsController} from "../../../../src/graphql/controllers/eventsController";

describe('Events Controller, resolve function', () => {

    let googleCalendarConnection, googleCalendarGateway, eventsController;
    const eventsPromise = new Promise((resolve) => {
        resolve('Google Events Response');
    });

    beforeEach(() => {
        googleCalendarConnection = sinon.stub();
        googleCalendarConnection.getEvents = sinon.stub().returns(eventsPromise);

        googleCalendarGateway = sinon.stub();
        googleCalendarGateway.parseEventsResponse = sinon.stub().returns(['parsed event', 'parsed event']);

        eventsController = new EventsController(googleCalendarConnection, googleCalendarGateway);
    });

    it('calls getEvents method of googleCalendarGateway', () => {
        eventsController.resolve(null, {start: '2019-02-06T22:00:00Z', end: '2019-02-07T22:00:00Z'});

        sinon.assert.calledWith(googleCalendarConnection.getEvents, '2019-02-06T22:00:00Z', '2019-02-07T22:00:00Z');
    });

    it('calls parseEventsResponse with google response', async () => {
        await eventsController.resolve(null, {start: '2019-02-06T22:00:00Z', end: '2019-02-07T22:00:00Z'});

        sinon.assert.calledWith(googleCalendarGateway.parseEventsResponse, 'Google Events Response');
    });

    it('returns parsed events', async () => {
        const events = await eventsController.resolve(null, {start: '2019-02-06T22:00:00Z', end: '2019-02-07T22:00:00Z'});

        expect(events).to.deep.equal(['parsed event', 'parsed event']);
    });
});