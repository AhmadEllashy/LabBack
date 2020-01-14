module.exports = (app)=>{
require("./user.api")(app)
require("./lab.api")(app)
require("./piece.api")(app)
}