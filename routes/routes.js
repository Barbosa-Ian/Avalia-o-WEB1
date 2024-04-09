const express = require("express")
const controller = require("../controllers/controller") 

const routes = express.Router()

routes.get("/", controller.getAll)
routes.get("/:id",controller.getId)
routes.post("/", controller.createNew)
routes.put("/:id", controller.updateData)
routes.delete("/;id", controller.deleteData)

module.exports = routes