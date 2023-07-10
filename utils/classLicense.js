/**
 * Creates a License data object
 * @class
 * @classdesc This object holds details on a license for reference.
 * @property {string} title               -Title of License
 * @property {string} link                -Link to License information
 * @property {string} badge               -Link to badge image
 * @property {number} year                -The Year the License was generated
 * @property {string} owner               -The Developer of the project
 * @property {string} programDescription  -A description of the project
 */
class License{
    constructor(title, link, badge){
      this.title = title;
      this.link = link;
      this.badge = badge;
      this.year = '';
      this.owner = '';
      this.programDescription = '';
    }
  }

  module.exports = { License };