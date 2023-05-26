### TASK-1 API CREATION

# DESCRIPTION
The APIes allows users to create, retrieve, update, and delete events. It provides functionalities to manage event details such as name, tagline, schedule, description, moderator, category, sub-category, rigor rank, and attendees. This API is built using Node.js, Express.js, MySQL, and Sequelize orm.





### Setup the project

 - Download this project from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

 - Run the database migrations: `npx sequelize-cli db:migrate`


 - To run the server execute
 ```
 npm run dev
 ```
 # Tools used for testing
 -PostMan 

 # APi
- GET /api/v3/app/events?id=:event_id

- Retrieve an event by its unique ID.

- GET /api/v3/app/events?type=latest&limit=5&page=1

- Retrieve the latest events with pagination.

- POST /api/v3/app/events

- Create a new event. Include the event details in the request payload.

- PUT /api/v3/app/events/:id

- Update an event by its unique ID. Include the updated event details in the request payload.

- DELETE /api/v3/app/events/:id

- Delete an event by its unique ID.

# Object Data Model
- An event object has the following properties:
```
{
  "type": "event",
  "uid": 18,
  "name": "Name of the event",
  "tagline": "A proper tag-line for the event",
  "schedule": "(Date + time) Timestamp",
  "description": "String",
  "files[image]": "Image file (File upload)",
  "moderator": "A user who is going to host",
  "category": "Category of the event",
  "sub_category": "Sub category",
  "rigor_rank": "Integer value",
  "attendees": "Array of user IDs who are attending the event"
}

```

# Technologies Used
- Node.js
- Express.js
- MySQL
- Sequelize

# Database
- This project uses MySQL as the database system