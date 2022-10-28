module.exports = {
  "id": "chief_complaint",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "title": {
      "type": "string"
    },
    "text": {
      "type": "string",
    },

    "additionalProperties": false,
    "required": [
      "title", "text", "identifiers"
    ]
  }
};
