const { mockData } = require('../db/mockData');

exports.getPersonData = async (req, res) => {
    try {
       
      res.status(200).send({ array: mockData });
  
    } catch (error) {
      res.status(500).send({ message: "error occurred, try again later or call me..." });
    }
  };
  