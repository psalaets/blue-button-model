var targetSiteCodeQualifier = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  }
};

var targetSiteCode = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    qualifiers: {
      type: 'array',
      items: targetSiteCodeQualifier
    }
  }
};

var woundMeasurement = {
  type: 'object',
  properties: {
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    code: {
      $ref: "cda_coded_entry"
    },
    date_time: {
      $ref: 'cda_date'
    },
    value: {
      $ref: 'cda_physical_quantity'
    }
  },
  required: ['identifiers', 'code', 'date_time', 'value']
};

var woundCharacteristic = {
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
    }
  },
  required: ['identifiers', 'date_time', 'value']
};

var pressureUlcerCount = {
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
      type: 'integer'
    }
  },
  required: ['identifiers', 'date_time', 'value']
};

var highestPressureUlcerStage = {
  type: 'object',
  properties: {
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    value: {
      type: 'string'
    }
  },
  required: ['identifiers', 'value']
};

var woundObservation = {
  type: 'object',
  properties: {
    identifiers: {
      type: 'array',
      items: {
        $ref: 'cda_id'
      }
    },
    value: {
      type: 'string'
    },
    target_site_code: targetSiteCode,
    wound_measurements: {
      type: 'array',
      items: woundMeasurement
    },
    wound_characteristics: {
      type: 'array',
      items: woundCharacteristic
    },
    pressure_ulcer_counts: {
      type: 'array',
      items: pressureUlcerCount
    },
    highest_pressure_ulcer_stage: highestPressureUlcerStage
  },
  required: ['identifiers', 'value']
};

module.exports = {
  "id": "physical_exam",
  "type": "object",
  "properties": {
    "subsections": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "text": {
            "type": "string"
          },
          "code": {
            "$ref": "cda_coded_entry"
          }
        },
        required: ['title', 'text', 'code']
      }
    },
    "wound_observations": {
      "type": "array",
      "items": woundObservation
    }
  },
  "additionalProperties": false
}