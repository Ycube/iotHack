const tropowebapi = require('tropo-webapi');

module.exports = {
  test: (req, res, next) => {
    // req.addListener('data', (data) => {
    //   json = data.toString();
    // });
    // var session = JSON.parse(json);
    let tropo = new tripowebapi.TropoWebAPI();
    tropo.say("Crime is happening!");
    tropo.call("14156768361", null, null, null, null, null, "SMS", null, null, null);
    res.send(tropowebapi.TropoJSON(tropo));
    // var initalText = session.session.initalText;

    // if (initalText == "Yes") {
    //   trop.say("Awesome!");
    // }
  }
}
