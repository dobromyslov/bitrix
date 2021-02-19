import { Shipment } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../../transformers/date-time-transformer';
import { ShipmentItemDto } from './shipment-item.dto';
import { AbstractDto } from '../abstract.dto';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class ShipmentDto extends AbstractDto implements Shipment {
  accountNumber: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  allowDelivery: boolean;

  basePriceDelivery: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  canceled: boolean;

  comments: string;
  companyId: string;
  currency: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  customPriceDelivery: boolean;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateAllowDelivery: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateCanceled: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateDeducted: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateInsert: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateMarked: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateResponsibleId: Date;

  @Type(() => String)
  @Transform(yesNoTransformer)
  deducted: boolean;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  deliveryDocDate: Date;

  deliveryDocNum: string;
  deliveryId: string;
  deliveryName: string;
  deliveryXmlId: string;
  discountPrice: number;
  empAllowDeliveryId: string;
  empCanceledId: number;
  empDeductedId: number;
  empMarkedId: number;
  empResponsibleId: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  externalDelivery: boolean;

  id: string;
  id1c: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  marked: boolean;

  orderId: string;
  priceDelivery: number;
  reasonMarked: string;
  reasonUndoDeducted: string;
  responsibleId: number;

  @Type(() => ShipmentItemDto)
  shipmentItems: ShipmentItemDto[];

  statusId: string;
  statusXmlId: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  system: boolean;

  trackingDescription: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  trackingLastCheck: Date;

  trackingNumber: string;
  trackingStatus: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  updated1c: boolean;

  version1c: string;
  xmlId: string;
}
