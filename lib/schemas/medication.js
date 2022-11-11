var manufacturedMaterial = {
  type: 'object',
  properties: {
    code: {
      $ref: 'cda_coded_entry'
    },
    lot_number_text: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  },
  required: ['code']
};

var medicationOrImmunizationInformation = {
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "manufactured_material": manufacturedMaterial,
    "manufacturer": {
      "type": "string"
    }
  },
  "required": [
    "manufactured_material"
  ]
};

var medicationSupply = {
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
    "status": {
      "type": "string"
    },
    "repeat_number": {
      "type": "integer"
    },
    "quantity": {
      "type": "integer"
    },
    "instructions": {
      "type": "object",
      "properties": {
        "code": {
          "$ref": "cda_coded_entry"
        },
        "free_text": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "author": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "items": {
            "$ref": "cda_id"
          },
          "minItems": 1
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "name": {
          "$ref": "cda_name"
        },
        "organization": {
          "$ref": "cda_organization"
        }
      },
      "additionalProperties": false
    },
    "product": medicationOrImmunizationInformation
  },
  "required": ["status"],
  "additionalProperties": false
};

var medicationDispense = {
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      },
      "minItems": 1
    },
    "status": {
      "type": "string"
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "repeat_number": {
      "type": "integer"
    },
    "quantity": {
      "type": "integer"
    },
    "performer": {
      "$ref": "cda_performer"
    },
    "supply": medicationSupply,
    "product": medicationOrImmunizationInformation
  },
  "required": ["identifiers", "status"],
  "additionalProperties": false
};

module.exports = {
  "id": "medication",
  "type": "object",
  "properties": {
    "date_time": {
      "$ref": "cda_date"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      },
      "minItems": 1
    },
    "sig": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "is_brand": {
      "type": "boolean"
    },
    "administration": {
      "type": "object",
      "properties": {
        "dose": {
          "$ref": "cda_physical_quantity"
        },
        "form": {
          "$ref": "cda_coded_entry"
        },
        "rate": {
          "$ref": "cda_physical_quantity"
        },
        "route": {
          "$ref": "cda_coded_entry"
        },
        "dose_restriction": {
          "$ref": "cda_physical_quantity"
        },
        "site": {
          "$ref": "cda_coded_entry"
        },
        "interval": {
          "type": "object",
          "properties": {
            "xsiType": {
              "type": "string"
            },
            "phase": {
              "$ref": "cda_date"
            },
            "period": {
              "$ref": "cda_physical_quantity"
            },
            "frequency": {
              "type": "boolean"
            },
            "alignment": {
              "type": "string"
            },
            "event": {
              "type": "string"
            },
            "event_offset": {
              "type": "object",
              "properties": {
                "low": {
                  "$ref": "cda_physical_quantity"
                },
                "high": {
                  "$ref": "cda_physical_quantity"
                },
                "center": {
                  "$ref": "cda_physical_quantity"
                },
                "width": {
                  "$ref": "cda_physical_quantity"
                }

              },
              "additionalProperties": false

            }
          },
          "additionalProperties": false
        }

      },
      "additionalProperties": false,
      "minProperties": 1
    },

    "precondition": {
      "type": "object",
      "properties": {
        "code": {
          "$ref": "cda_coded_entry"
        },
        "value": {
          "$ref": "cda_coded_entry"
        }
      },
      "additionalProperties": false
    },
    "product": medicationOrImmunizationInformation,
    "supply": medicationSupply,
    "indication": {
      "$ref": "indication"
    },
    "performer": {
      "$ref": "cda_performer"
    },
    "drug_vehicle": {
      "$ref": "cda_coded_entry"
    },
    "dispense": medicationDispense,
    "reactions": {
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
      },
    },
  },
  "additionalProperties": true,
  "minProperties": 1,
  "required": [
    "product",
    "status"
  ]
};
