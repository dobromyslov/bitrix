import { ShipmentItem } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class ShipmentItemDto extends AbstractDto implements ShipmentItem {
  basketId: string;
  dateInsert: string;
  id: string;
  isChanged: boolean;
  orderDeliveryId: string;
  quantity: number;
  reservedQuantity: number;
  xmlId: string;
}
