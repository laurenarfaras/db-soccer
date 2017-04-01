'use strict'

class TeamsController {

  * index (request, response) {
    yield response.sendView("home")
  }

}

module.exports = TeamsController
