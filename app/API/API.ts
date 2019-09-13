const url = require('../../package.json').ApiUrl;


export const getApiJoueurs = () => {
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.players;
        })
        .catch((error) => {
            console.error(error);
        });

};

