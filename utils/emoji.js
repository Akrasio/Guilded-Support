const fetch = require("wumpfetch");
class Emoji {
    async stats(data) {
        return fetch(`https://emoji.gg/api/stats`, {
            method: 'GET'
        }).send()
            .then(res => res.json()).then(json => {
                return (json[data] || json)
            })
    }
}
module.exports = Emoji;
