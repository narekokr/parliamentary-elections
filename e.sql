USE elections;

SELECT P.name, count(*) as votes 
FROM Votes V 
JOIN Parties P ON P.id = V.partyId 
GROUP BY V.partyId
ORDER BY votes DESC;


WITH addresses as (
	SELECT A.id 
    FROM Districts D 
    JOIN Cities C ON C.districtId = D.id 
    JOIN Streets S ON C.id = S.cityId 
    JOIN Addresses A ON S.id = A.streetId 
    WHERE D.name = "Ararat") 

SELECT P.name, count(*) as votes 
FROM Votes V 
JOIN Parties P ON P.id = V.partyId 
JOIN PollingStations PS ON V.pollingStationId = PS.id 
WHERE PS.addressId in (SELECT * FROM addresses) 
GROUP BY P.name
ORDER BY votes DESC;


WITH addresses as (
	SELECT A.id 
    FROM Cities C 
	JOIN Streets S ON C.id = S.cityId 
    JOIN Addresses A ON S.id = A.streetId 
    WHERE C.name = "Yeghvard") 
    
SELECT P.name, count(*) as votes
FROM Votes V 
JOIN Parties P ON P.id = V.partyId 
JOIN PollingStations PS ON V.pollingStationId = PS.id 
WHERE PS.addressId in (SELECT * FROM addresses) 
GROUP BY P.name;



UPDATE Phones JOIN Citizens ON Phones.citizenId = Citizens.id 
	SET number = "+374-77-99-55"
    WHERE Citizens.SSN = 11;

SELECT P.number as phoneNumber, C.id as id, C.SSN as SSN 
FROM Phones P 
JOIN Citizens C ON C.id = P.citizenId;



INSERT INTO Phones (id, citizenId, number)
	VALUES (
		default, 
        (SELECT Citizens.id FROM Citizens WHERE Citizens.SSN = 90), 
        "+7(8352)793695"
        );
        
SELECT * FROM Phones WHERE citizenId = 90; 



DELETE FROM Phones 
	WHERE citizenId = 90
    LIMIT 1;


