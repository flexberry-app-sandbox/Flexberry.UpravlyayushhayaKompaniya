import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  месяцНачис: DS.attr('date'),
  номерЛицСчет: DS.attr('number'),
  суммаКоррек: DS.attr('number'),
  суммаНачис: DS.attr('number'),
  типНачис: DS.attr('string'),
  услуга: DS.attr('string'),
  базаДанныхЛС: DS.belongsTo('i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с', { inverse: null, async: false }),
  перерасчетКУ: DS.belongsTo('i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у', { inverse: 'тЧПерерасчетаКУ', async: false })
});

export let ValidationRules = {
  месяцНачис: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.месяцНачис.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЛицСчет: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.номерЛицСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаКоррек: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.суммаКоррек.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНачис: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.суммаНачис.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типНачис: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.типНачис.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  базаДанныхЛС: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.базаДанныхЛС.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  перерасчетКУ: {
    descriptionKey: 'models.i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у.validations.перерасчетКУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПерерасчетаКУE', 'i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у', {
    типНачис: attr('Тип начис', { index: 0 }),
    суммаНачис: attr('Сумма начис', { index: 1 }),
    месяцНачис: attr('Месяц начис', { index: 2 }),
    услуга: attr('Услуга', { index: 3 }),
    номерЛицСчет: attr('Номер лиц счет', { index: 4 }),
    суммаКоррек: attr('Сумма коррек', { index: 5 })
  });
};
