import { Serializer as ЖилецSerializer } from
  '../mixins/regenerated/serializers/i-i-s-upravlyayushhaya-kompaniya-жилец';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖилецSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
