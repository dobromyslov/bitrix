import { ShipmentItem } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';
import { Transform, Type } from 'class-transformer';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class ShipmentItemDto extends AbstractDto implements ShipmentItem {
  basketId: string;
  dateInsert: string;
  id: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isChanged: boolean;

  orderDeliveryId: string;
  quantity: number;
  reservedQuantity: number;
  xmlId: string;
}
