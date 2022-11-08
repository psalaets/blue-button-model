module.exports = {
  "id": "assessment_plan",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "string",
      "$ref": "cda_id"
    },
    "code": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },

    "act": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          }
        },
        "effectiveTime": {
          "type": "string",
          "$ref": "cda_date"
        },
        "id": {
          "type": "array"
        },
        "code": {
          "type": "string"
        },
        "statusCode": {
          "type": "string"
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "entry": {
          "type": "array",
          "items": {
            "identifiers": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              }
            },
          }
        },
        "indication": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "string",
              "$ref": "cda_id"
            },
            "id": {
              "type": "array",
            },
            "code": {
              "type": "string"
            },
            "statusCode": {
              "type": "string"
            },
            "date_time": {
              "$ref": "cda_date"
            },
            "value": {
              "type": "array"
            }
          },
          "additionalProperties": false,
          "required": [
            "id"
          ]
        },
        "instruction": {
          "type": "array",
          "items": {
            "identifiers": {
              "type": "string",
              "$ref": "cda_id"
            },
            "code": {
              "type": "string"
            },
            "statusCode": {
              "type": "string"
            }
          }
        },
        "author": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "string",
              "$ref": "cda_id"
            },
            "time": {
              "type": "string",
              "$ref": "cda_date"
            },
            "assignedAuthor": {
              "type": "object",
              "properties": {
                "identifiers": {
                  "type": "string",
                  "$ref": "cda_id"
                },
                "code": {
                  "type": "string"
                },
                "assignedPerson": {
                  "type": "array",
                  "items": {
                    "id": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    },
                    "telecom": {
                      "type": "array"
                    },
                    "addr": {
                      "type": "array"
                    },
                  }
                }
              }
            }
          }
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
};