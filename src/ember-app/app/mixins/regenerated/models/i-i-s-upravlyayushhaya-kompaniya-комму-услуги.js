import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDтарифа: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('number')
});

export let ValidationRules = {
  iDтарифа: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-комму-услуги.validations.iDтарифа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-комму-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-комму-услуги.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КоммуУслугиE', 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги', {
    iDтарифа: attr('I dтарифа', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('КоммуУслугиL', 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги', {
    iDтарифа: attr('I dтарифа', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ТарифE', 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги', {
    iDтарифа: attr('I dтарифа', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ТарифL', 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги', {
    iDтарифа: attr('I dтарифа', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
