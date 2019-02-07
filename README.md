# GraphQL with Node and Express

To run the tests or the application you need to export the calendar account env variables:

```bash
    export CALENDAR_ID=someone@gmail.com
    export GOOGLE_APPLICATION_CREDENTIALS=path/to/service_account.json
    export GCLOUD_PROJECT=id_of_project_with_access_to_the_the_calendar
```

To run the app:

```bash
    npm start
```

The application will be available at http://localhost:3000/graphql

To run the tests:

```bash
    npm test
```

Any comments please email me or post: eguezgustavo@gmail.com