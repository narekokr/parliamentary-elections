const express = require('express');
const sequelize = require('../database');
const faker = require('faker');
const app = express();

app.post('/citizens', async (req, res) => {
    const { number } = req.query;
    for (let i = 0; i < +number; i++) {
        const randomNum = Math.floor((Math.random() * 100) + 1);
        const gender = randomNum % 2 === 0 ? 'male' : 'female';
        const age  = Math.floor((Math.random() * 80) + 1);
        await sequelize.models.Citizen.create({
            SSN: Date.now() - 1639130000000,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender,
            DOB: Date.now() - 1000 * 60 * 60 * 24 * 365 * age,
            email: faker.internet.email()
        });
    }

    res.status(201).send('Done');
})

module.exports = app;