import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПерерасчетКУMixin
} from '../mixins/regenerated/models/i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПерерасчетКУMixin, Validations, {
});

defineProjections(Model);

export default Model;
