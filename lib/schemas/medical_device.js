module.exports = {
  "id": "medical_device",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      },
      "minItems": 1
    },
    "product": {
      type: "object",
      properties: {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          },
          "minItems": 1
        },
      }
    },
    "status": {
      "type": "string"
    },
    "date_time": {
      "$ref": "cda_date"
    },
    target_site: {
      "$ref": "cda_coded_entry"
    },
    quantity: {
      type: "integer"
    },
    text: {
      type: "string"
    }
  },
  "additionalProperties": false,
  "required": ["product"]
};
