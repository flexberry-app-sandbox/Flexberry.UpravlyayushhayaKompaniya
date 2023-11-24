import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КоммуУслугиMixin
} from '../mixins/regenerated/models/i-i-s-upravlyayushhaya-kompaniya-комму-услуги';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КоммуУслугиMixin, Validations, {
});

defineProjections(Model);

export default Model;
