import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDжильца: DS.attr('number'),
  адрес: DS.attr('string'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iDжильца: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-жилец.validations.iDжильца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-жилец.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-жилец.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-жилец.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖилецE', 'i-i-s-upravlyayushhaya-kompaniya-жилец', {
    iDжильца: attr('I dжильца', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 })
  });

  modelClass.defineProjection('ЖилецL', 'i-i-s-upravlyayushhaya-kompaniya-жилец', {
    iDжильца: attr('I dжильца', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 })
  });
};
