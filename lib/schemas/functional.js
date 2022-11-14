module.exports = {
  "id": "functional",
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
    "status": {
      "enum": ["completed", "negative"]
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "code": {
      "$ref": "cda_coded_entry"
    },
    "functionalStatus": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          },
          "minItems": 1
        }
      },
      "code": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "text": {
        "type": "string"
      },
      "statusOrganizer": {
        "type": "array",
        "items": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            }
          }
        }
      },
      "statusObservation": {
        "type": "object",
        "properties": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            },
            "minItems": 1
          }
        }
      },
      "caregiverCharacteristics": {
        "type": "string"
      },
      "scaleObservation": {
        "type": "object",
        "properties": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            },
            "minItems": 1
          }
        }
      },
      "nonMedicinalSupplyActivity": {
        "type": "object",
        "properties": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            },
            "minItems": 1
          }
        }
      },
      "selfCareActivities": {
        "type": "object",
        "properties": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            },
            "minItems": 1
          }
        },
        "sensoryStatus": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              },
              "minItems": 1
            },
          }
        }
      }
    },
    "additionalProperties": false,
  }
};