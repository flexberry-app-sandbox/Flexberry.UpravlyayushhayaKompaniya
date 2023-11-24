import { Serializer as БазаДанныхЛСSerializer } from
  '../mixins/regenerated/serializers/i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазаДанныхЛСSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
