import {GoogleCalendarConnection} from "./googleCalendar/services/googleCalendarConnection";
import {GoogleCalendarGateway} from "./googleCalendar/services/googleCalendarGateway";
import {EventsController} from "./graphql/controllers/eventsController";

export const getGoogleCalendarConnection = () => new GoogleCalendarConnection(process.env.CALENDAR_ID);
export const googleCalendarGateway = new GoogleCalendarGateway();
export const eventsController = new EventsController(getGoogleCalendarConnection(), googleCalendarGateway);