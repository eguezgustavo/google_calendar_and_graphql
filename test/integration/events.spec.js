import {expect} from 'chai';
import fetch from 'node-fetch';

// To make this test pass 3 env variables must be set:
// CALENDAR_ID=someone@gmail.com
// GOOGLE_APPLICATION_CREDENTIALS=path/to/service_account.json
// GCLOUD_PROJECT=id_of_project_with_access_to_the_the_calendar

it('gets events from google calendar', async () => {

    const response = await fetch("http://localhost:3000/graphql?", {
        "credentials":"omit",
        "headers":{
            "accept":"application/json",
            "accept-language":"es-EC,es;q=0.9,en-US;q=0.8,en;q=0.7,es-419;q=0.6",
            "cache-control":"no-cache",
            "content-type":"application/json",
            "pragma":"no-cache"
        },
        "body":"{\"query\":\"{\\n  events(start: \\\"2019-02-01T00:00:00Z\\\", end: \\\"2019-02-06T19:00:00Z\\\") {\\n    title\\n    start\\n    end\\n    details\\n  }\\n}\",\"variables\":null}",
        "method":"POST"
    });
    const content = await response.json();
    const firstEvent = content.data.events[0];

    console.log(firstEvent);

    expect(firstEvent.title).to.exist;
    expect(firstEvent.start).to.exist;
    expect(firstEvent.end).to.exist;
});