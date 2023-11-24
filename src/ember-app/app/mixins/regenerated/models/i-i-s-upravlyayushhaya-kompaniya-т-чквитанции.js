import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDтарифа: DS.attr('number'),
  всегоНачисЗаРП: DS.attr('number'),
  итогоКОплЗаРП: DS.attr('number'),
  объемКУ: DS.attr('number'),
  размПлатЗаКУ: DS.attr('number'),
  услуга: DS.attr('string'),
  коммуУслуги: DS.belongsTo('i-i-s-upravlyayushhaya-kompaniya-комму-услуги', { inverse: null, async: false }),
  квитанция: DS.belongsTo('i-i-s-upravlyayushhaya-kompaniya-квитанция', { inverse: 'тЧквитанции', async: false })
});

export let ValidationRules = {
  iDтарифа: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.iDтарифа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  всегоНачисЗаРП: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.всегоНачисЗаРП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  итогоКОплЗаРП: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.итогоКОплЗаРП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объемКУ: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.объемКУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  размПлатЗаКУ: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.размПлатЗаКУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  коммуУслуги: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.коммуУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  квитанция: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-чквитанции.validations.квитанция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧквитанцииE', 'i-i-s-upravlyayushhaya-kompaniya-т-чквитанции', {
    услуга: attr('Услуга', { index: 0 }),
    объемКУ: attr('Объем КУ', { index: 1 }),
    iDтарифа: attr('I dтарифа', { index: 2 })
  });
};
