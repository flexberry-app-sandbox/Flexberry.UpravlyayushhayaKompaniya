import { Serializer as ПерерасчетКУSerializer } from
  '../mixins/regenerated/serializers/i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПерерасчетКУSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
