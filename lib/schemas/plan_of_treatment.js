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
    "goal_observation": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          }
        },
        "entryReference": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              }
            },
            "id": {
              "type": "string"
            },
            "code": {
              "$ref": "cda_coded_entry"
            },
            "statusCode": {
              "type": "string"
            },
          }
        },
        "priorityPreference": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              }
            },
            "id": {
              "type": "string"
            },
            "code": {
              "$ref": "cda_coded_entry"
            },
            "date_time": {
              "$ref": "cda_date"
            },
            "value": {
              "type": "string"
            },
            "authorParticipation": {
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
                "id": {
                  "type": "string"
                },
                "code": {
                  "$ref": "cda_coded_entry"
                }
              }
            }
          }
        },
        "externalDocument": {
          "type": "object",
              "properties": {
                "identifiers": {
                  "type": "array",
                  "items": {
                    "$ref": "cda_id"
                  }
                },
                "id": {
                  "type": "string"
                },
                "code": {
                  "$ref": "cda_coded_entry"
                },
                "setId": {
                  "type": "string"
                },
                "versionNumber": {
                  "type": "string"
                }
              }
        }
      }
    }
  },
  "additionalProperties": false,
};
