import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у', 'Unit | Model | i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с',
    'model:i-i-s-upravlyayushhaya-kompaniya-должности',
    'model:i-i-s-upravlyayushhaya-kompaniya-жилец',
    'model:i-i-s-upravlyayushhaya-kompaniya-квитанция',
    'model:i-i-s-upravlyayushhaya-kompaniya-комму-услуги',
    'model:i-i-s-upravlyayushhaya-kompaniya-организация',
    'model:i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у',
    'model:i-i-s-upravlyayushhaya-kompaniya-сотрудники',
    'model:i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у',
    'model:i-i-s-upravlyayushhaya-kompaniya-т-чквитанции',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
