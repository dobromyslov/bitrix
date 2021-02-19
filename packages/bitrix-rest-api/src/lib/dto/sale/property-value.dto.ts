import { PropertyValue } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class PropertyValueDto extends AbstractDto implements PropertyValue {
  code: string;
  id: number;
  name: string;
  orderId: number;
  orderPropsId: number;
  orderPropsXmlId: string;
  value: unknown | unknown[];
}
