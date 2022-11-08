var priorityPreference = {
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
    date_time: {
      $ref: 'cda_date'
    },
    value: {
      $ref: 'cda_coded_entry'
    }
  },
  required: ['identifiers', 'code', 'value']
};

var indication = {
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
    date_time: {
      $ref: 'cda_date'
    },
    value: {
      $ref: 'cda_coded_entry'
    }
  },
  required: ['identifiers', 'code']
};

var instruction = {
  type: 'object',
  properties: {
    code: {
      $ref: 'cda_coded_entry'
    }
  },
  required: ['code']
};

module.exports = {
  "id": "assessment_plan_act",
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
    "status_code": {
      "type": "string"
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
    "priority_preferences": {
      "type": "array",
      "items": priorityPreference
    },
    "indications": {
      "type": "array",
      "items": indication
    },
    "instructions": {
      "type": "array",
      "items": instruction
    },
  },
  required: ['identifiers', 'code', 'status_code']
};
