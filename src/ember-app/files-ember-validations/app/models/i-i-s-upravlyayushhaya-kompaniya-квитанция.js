import {
  defineNamespace,
  defineProjections,
  Model as КвитанцияMixin
} from '../mixins/regenerated/models/i-i-s-upravlyayushhaya-kompaniya-квитанция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КвитанцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
