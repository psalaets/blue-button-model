"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/family_history_entry');

describe('family_history_entry unit tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'family_history_entry');
    expect(valid).toBe(true);
  });

  it('sample valid_1', function () {
    var valid = bbm.validator.validate(samples.valid_1, 'family_history_entry');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'family_history_entry');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(2);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
    expect(c2p.INVALID_TYPE).toHaveLength(1);
    expect(c2p.INVALID_TYPE[0]).toBe("#/dead");
  });

  it('sample invalid_1', function () {
    var valid = bbm.validator.validate(samples.invalid_1, 'family_history_entry');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(2);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toHaveLength(1);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).toBe("#/");
    expect(c2p.INVALID_TYPE).toHaveLength(1);
    expect(c2p.INVALID_TYPE[0]).toBe("#/dead");
  });
});
