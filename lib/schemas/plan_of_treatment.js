module.exports = {
  "id": "plan_of_treatment",
  "type": "object",
  "properties": {
    "indications": {
      "type": "array",
      "items": {
        "$ref": "indication"
      }
    },
    "nutrition_recommendations": {
      "type": "array",
      "items": {
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
          "code": {
            "$ref": "cda_coded_entry"
          },
        },
        "required": ["code"],
        "additionalProperties": false
      }
    },
    "goal_observations": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            }
          },
          "code": {
            "$ref": "cda_coded_entry"
          },
          "status": {
            "type": "string"
          },
          "date_time": {
            "$ref": "cda_date"
          },
          "value": {
            "type": "object",
            "properties": {
              "low": {
                "$ref": "cda_physical_quantity"
              },
              "high": {
                "$ref": "cda_physical_quantity"
              },
              "width": {
                "$ref": "cda_physical_quantity"
              },
              "center": {
                "$ref": "cda_physical_quantity"
              }
            }
          }
        },
        "required": ["code", "status"]
      }
    }
  },
  "additionalProperties": false,
};
