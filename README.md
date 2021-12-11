# Elections

Sample database to use and manage elections

## Installation

Clone the repo, and create a `.env` file, copying the content of `.env.example`, and change the DB username and password if necessary. Lastly run

```bash
npm install
```

## Usage

Run the following commands to create the databse and sample data
```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

If the last command throws an error, undo  the seeds by running `npx sequelize db:seed:undo:all`, and seed the files separately in a sequential order, like the following `npx sequelize db:seed --seed 20211210124306-seed-user`

Once the DB is ready, run `npm start` to start the server

Or find some SQL queries in the example file