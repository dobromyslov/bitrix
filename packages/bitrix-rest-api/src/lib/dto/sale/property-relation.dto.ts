import { AbstractDto } from '../abstract.dto';
import { PropertyRelation } from 'bitrix-rest-api-core';

export class PropertyRelationDto extends AbstractDto implements PropertyRelation {
  entityId: number;
  entityType: string;
  propertyId: number;
}
