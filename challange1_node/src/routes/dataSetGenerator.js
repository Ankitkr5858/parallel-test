'use strict';
var express = require('express')
var router = express.Router()

// Loading ENV Variables in Dev 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const getTimeStamp = (startDate, endDate) => {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
}
const getDataSets = async (request, response) => {
    const pages = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const numberOfUser = 100;
    const dataSets = pages.reduce((acc, pageTitle) => {
        for (let index = 1; index <= numberOfUser; index++){
            acc.push({
                Timestamp: getTimeStamp(new Date('01/01/2021'), new Date('01/10/2021')),
                userID: index,
                pageTitle: pageTitle
            })
        }
        return acc
    }, [])
    response.status(200).send(dataSets);
};

router.get('/getDataSets', getDataSets)

module.exports = router