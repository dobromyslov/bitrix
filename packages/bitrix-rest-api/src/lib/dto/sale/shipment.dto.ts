import { Shipment } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../../transformers/date-time-transformer';
import { ShipmentItemDto } from './shipment-item.dto';
import { AbstractDto } from '../abstract.dto';

export class ShipmentDto extends AbstractDto implements Shipment {
  accountNumber: string;
  allowDelivery: boolean;
  basePriceDelivery: number;
  canceled: boolean;
  comments: string;
  companyId: string;
  currency: string;
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
  externalDelivery: boolean;
  id: string;
  id1c: string;
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
  system: boolean;
  trackingDescription: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  trackingLastCheck: Date;

  trackingNumber: string;
  trackingStatus: string;
  updated1c: boolean;
  version1c: string;
  xmlId: string;
}
