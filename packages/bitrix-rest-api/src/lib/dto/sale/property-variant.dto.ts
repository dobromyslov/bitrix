import { PropertyVariant } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class PropertyVariantDto extends AbstractDto implements PropertyVariant {
  description: string;
  id: number;
  name: string;
  orderPropsId: number;
  sort: number;
  value: unknown;
}
