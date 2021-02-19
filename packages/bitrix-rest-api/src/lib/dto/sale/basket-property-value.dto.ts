import { BasketPropertyValue } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class BasketPropertyValueDto extends AbstractDto implements BasketPropertyValue {
  basketId: string;
  code: string;
  id: string;
  name: string;
  sort: number;
  value: unknown;
  xmlId: string;
}
