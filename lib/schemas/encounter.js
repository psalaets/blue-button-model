var authorParticipation = {
  type: 'object',
  properties: {
    date_time: {
      $ref: 'cda_date'
    },
    assigned_author: {
      type: 'object',
      properties: {
        identifiers: {
          type: 'array',
          items: {
            $ref: 'cda_id'
          }
        },
        code: {
          $ref: 'cda_coded_entry'
        },
        assigned_person: {
          type: 'object',
          properties: {
            names: {
              type: "array",
              items: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  }
};

var scaleObservationAuthor = {
  type: 'object',
  properties: {
    authors: {
      type: 'array',
      items: {
        $ref: 'cda_performer'
      }
    },
    date_time: {
      $ref: 'cda_date'
    }
  },
  required: ['date_time']
}

var supportingObservation = {
  type: 'object',
  properties: {
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    code: {
      $ref: 'cda_coded_entry'
    },
    values: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  },
  required: ['identifiers', 'code', 'values']
};

var scaleObservationRange = {
  type: 'object',
  properties: {
    low: {
      type: 'string'
    },
    high: {
      type: 'string'
    },
    unit: {
      type: 'string'
    },
    range: {
      type: 'string'
    },
  }
};

var scaleObservation = {
  type: 'object',
  properties: {
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    code: {
      $ref: 'cda_coded_entry'
    },
    derivation_expression: {
      type: 'string'
    },
    date_time: {
      $ref: 'cda_date'
    },
    value: {
      type: 'string'
    },
    interpretation_codes: {
      type: 'array',
      items: {
        $ref: 'cda_coded_entry'
      }
    },
    authors: {
      type: 'array',
      items: scaleObservationAuthor
    },
    observations: {
      type: 'array',
      items: supportingObservation
    },
    range: {
      type: 'array',
      items: scaleObservationRange
    }
  },
  required: ['identifiers', 'code', 'date_time', 'value']
};

var diagnosis = {
  type: 'object',
  properties: {
    negation: {
      type: 'boolean'
    },
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    code: {
      $ref: 'cda_coded_entry'
    },
    status_code: {
      type: 'string'
    },
    date_time: {
      $ref: 'cda_date'
    },
    value: {
      type: 'string'
    },
    author_participation: authorParticipation,
    age: {
      type: 'object',
      properties: {
        value: {
          $ref: 'cda_physical_quantity'
        }
      }
    },
    prognosis: {
      type: 'object',
      properties: {
        date_time: {
          $ref: 'cda_date'
        },
        value: {
          type: 'string'
        }
      }
    },
    priority_preferences: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          identifiers: {
            type: 'array',
            items: {
              $ref: 'cda_id'
            }
          },
          date_time: {
            $ref: 'cda_date'
          },
          value: {
            type: 'string'
          },
          author: authorParticipation
        }
      }
    },
    problem_status: {
      type: 'object',
      properties: {
        value: {
          type: 'string'
        }
      }
    },
    scales: {
      type: 'array',
      items: scaleObservation
    },
    diagnosis_date: {
      type: 'array',
      items: {
        $ref: 'cda_date'
      }
    }
  },
  required: ['identifiers', 'code', 'status_code', 'date_time', 'value']
};

var finding = {
  "type": "object",
  "properties": {
    "value": {
      "$ref": "cda_coded_entry"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "date_time": {
      "$ref": "cda_date"
    }
  },
  "additionalProperties": false
};

module.exports = {
  "id": "encounter",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "encounter": {
      "$ref": "cda_coded_entry"
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "performers": {
      "type": "array",
      "items": {
        "$ref": "cda_performer"
      }
    },
    "locations": {
      "type": "array",
      "items": {
        "$ref": "cda_location"
      }
    },
    "findings": {
      "type": "array",
      "items": finding
    },
    "diagnoses": {
      "type": "array",
      "items": diagnosis
    },
  },
  "required": ["encounter", "date_time"]
};