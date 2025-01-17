module.exports = {
  "id": "immunization",
  "type": "object",
  "properties": {
    "date_time": {
      "$ref": "cda_date"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "status": {
      "type": "string"
    },
    "sequence_number": {
      "type": "string"
    },
    "administration": {
      "type": "object",
      "properties": {
        "dose": {
          "$ref": "cda_physical_quantity"
        },
        "route": {
          "$ref": "cda_coded_entry"
        },
        "body_site": {
          "$ref": "cda_coded_entry"
        },
        "form": {
          "$ref": "cda_coded_entry"
        }
      },
      "additionalProperties": false
    },
    "product": {
      "type": "object",
      "properties": {
        "lot_number": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "product": {
          "$ref": "cda_coded_entry"
        }
      },
      "required": [
        "product"
      ],
      "additionalProperties": false
    },
    "performer": {
      "$ref": "cda_performer"
    },
    "instructions": {
      "type": "object",
      "properties": {
        "free_text": {
          "type": "string"
        },
        "code": {
          "$ref": "cda_coded_entry"
        }
      },

      "additionalProperties": false
    },
    "refusal_reason": {
      "type": "string"
    },
    "indications": {
      "type": "array",
      "items": {
        "$ref": "indication"
      }
    },
    "reaction": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          }
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "reaction": {
          "$ref": "cda_coded_entry"
        },
        "free_text_reaction": {
          "type": "string"
        },
        "severity": {
          "type": "object",
          "properties": {
            "code": {
              "$ref": "cda_coded_entry"
            },
            "interpretation": {
              "$ref": "cda_coded_entry"
            }
          },
          "additionalProperties": false
        },
      },
      "required": ["date_time", "reaction"],
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "required": [
    "status",
    "product"
  ]
};
