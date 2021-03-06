var Base = require('./base');
var xmlUtils = require('../xml-utils');

class Rect extends Base
{
  constructor(element, shapeId) {
    super(element, shapeId);
  }

  processGeometry(xmlDoc, section) {
    var geoIndex = 1;
    var w = this.element.width;
    var h = this.element.height;
  
    section.appendChild(xmlUtils.createRowScaled(xmlDoc, "MoveTo", geoIndex++, 0, h, "0", "Height"));
    section.appendChild(xmlUtils.createRowScaled(xmlDoc, "LineTo", geoIndex++, w, h, "Width", "Height"));
    section.appendChild(xmlUtils.createRowScaled(xmlDoc, "LineTo", geoIndex++, w, 0, "Width", "0"));
    section.appendChild(xmlUtils.createRowScaled(xmlDoc, "LineTo", geoIndex++, 0, 0, "0", "0"));
    section.appendChild(xmlUtils.createRowScaled(xmlDoc, "LineTo", geoIndex++, 0, h, "0", "Height"));
  }
}

module.exports = Rect;