const sidebar = {
  Introduction: ['getting-started','herbsjs', 'motivation',  'architecture', 'ecosystem'],
  UseCase: ['whatis', 'gettingStarted', 'features'],
  Entity: ['whatis', 'gettingStarted', 'features'],
  Validation: ['suma'],
  Glues: ['whatisglue', 'herbs2gql', 'herbs2knex', 'herbsshelf', 'herbs2rpl', 'suma2text', 'herbs-snippets'],
}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };
