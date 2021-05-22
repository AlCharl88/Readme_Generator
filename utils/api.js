const axios = require('axios');

const api = {
    async getUser(userReponses) {
        try {
            let reponse = await axios
            .get(`https://api.github.com/users/${userResponses.username}`);
            return reponse.data;
        } catch(error) {
            console.log(error);
        }
    }
};

module.exports = api