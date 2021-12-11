const express = require("express");
const sequelize = require("../database");
const app = express();

app.get("/citizens", async (req, res) => {
  const { limit } = req.query;
  const citizens = await sequelize.models.Citizen.findAll({limit: +limit});

  res.status(200).send(citizens);
});

app.get('/winner', async (req, res) => {
    const [ winner ]= await sequelize.query(`SELECT P.name, count(*) as votes 
    FROM Votes V 
    JOIN Parties P ON P.id = V.partyId 
    GROUP BY V.partyId
    ORDER BY votes DESC
    LIMIT 1;`);

    res.status(200).send(winner);
});

app.post('/phone', async (req, res) => {
    const { SSN, number } = req.query;
    const citizen = await sequelize.models.Citizen.findOne({where: 
        { SSN: +SSN }
    });
    await sequelize.models.Phone.create({
        citizenId: citizen.id,
        number
    });

    res.status(201).send();
});

module.exports = app;
