const fakeEvents = [{
    id: 1,
    title: 'Event 1',
    start: '2018-02-06T16:00:00Z',
    end: '2018-02-06T17:00:00Z',
    details: 'Details 1'
}, {
    id: 2,
    title: 'Event 3',
    start: '2018-02-06T17:00:00Z',
    end: '2018-02-06T18:00:00Z',
    details: 'Details 2'
}];

export const eventController = (_, {id}) => fakeEvents[id - 1];
