const Address = require('./address');
const Candidate = require('./candidate');
const City = require('./city');
const Citizen = require('./citizen');
const CitizenAddress = require('./citizenAddress');
const District = require('./district');
const Election = require('./election');
const Observer = require('./observer');
const Party = require('./party');
const PartyAddress = require('./partyAddress');
const Phone = require('./phone');
const PollingStation = require('./pollingStation');
const Street = require('./street');
const Vote = require('./vote');

module.exports = [
    Citizen, Party, District, City, Street, Address, Election, PollingStation,
    Observer, Candidate, Phone, CitizenAddress, PartyAddress, Vote
]