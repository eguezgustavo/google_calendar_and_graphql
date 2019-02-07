import {EventType} from "./types";
import {eventController} from "./controllers/eventController";
import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {eventsController} from "../servicesFactory";

const fields = {
    events: {
        type: GraphQLList(EventType),
        args: {
            start: {type: GraphQLString},
            end: {type: GraphQLString}
        },
        resolve: eventsController.resolve
    },
    event: {
        type: EventType,
        args: {
            id: {type: GraphQLString}
        },
        resolve: eventController
    }
};

export const globalQuery = new GraphQLObjectType({
    name: 'Query',
    fields
});
