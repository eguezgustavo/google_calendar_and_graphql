import {GraphQLObjectType, GraphQLString} from "graphql";

export const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: {
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        start: {type: GraphQLString},
        end: {type: GraphQLString},
        details: {type: GraphQLString}
    }
});
