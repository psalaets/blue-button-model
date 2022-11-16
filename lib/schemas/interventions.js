module.exports = {
  "id": "interventions",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      },
      "minItems": 1
    },
    "type": {
      "$ref": "cda_coded_entry"
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "code": {
      "$ref": "cda_coded_entry"
    }
  },
  "additionalProperties": false,
};
