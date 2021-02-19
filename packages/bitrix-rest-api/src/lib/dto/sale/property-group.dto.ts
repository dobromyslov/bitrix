import { PropertyGroup } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class PropertyGroupDto extends AbstractDto implements PropertyGroup {
  id: number;
  name: string;
  personTypeId: number;
  sort: number;
}
