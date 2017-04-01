'use strict'

const Schema = use('Schema')

class TeamsTableSchema extends Schema {

  up () {
    this.create('teams', (table) => {
      table.increments()
      table.timestamps()
      // id INTEGER PRIMARY KEY
      // team_api_id INTEGER UNIQUE
      // team_fifa_api_id INTEGER
      // team_long_name VARCHAR(50)
      // team_short_name VARCHAR(50)
      table.integer()
    })
  }

  down () {
    this.drop('teams')
  }

}

module.exports = TeamsTableSchema
