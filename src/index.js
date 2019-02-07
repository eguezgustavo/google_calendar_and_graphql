import 'babel-polyfill';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import {globalQuery} from "../dist/graphql/queries";
import {GraphQLSchema} from "graphql";
import {eventsController, getGoogleCalendarConnection, googleCalendarGateway} from "./servicesFactory";


let app = express();
let schema = new GraphQLSchema({query: globalQuery});

app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => ({
    schema: schema,
    graphiql: true
})));

app.use('/', async (req, res, next) => {
    try {
        const events = await eventsController.resolve(null, {start: '2019-02-01T00:00:00Z', end: '2019-02-06T19:00:00Z'});
        return res.json(events);
    } catch (e) {
        return res.json({errorWhileGettingEvents: true});
    }

});

app.listen(3000, () => {
    console.log(`Started on port 3000`);
});

