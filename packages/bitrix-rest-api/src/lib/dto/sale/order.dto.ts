import { Order } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../../transformers/date-time-transformer';
import { BasketItemDto } from './basket-item.dto';
import { PaymentDto } from './payment.dto';
import { PropertyValueDto } from './property-value.dto';
import { ShipmentDto } from './shipment.dto';
import { AbstractDto } from '../abstract.dto';

export class OrderDto extends AbstractDto implements Order {
  accountNumber: string;
  additionalInfo: string;
  affiliateId: number;

  @Type(() => BasketItemDto)
  basketItems: BasketItemDto[];

  canceled: boolean;
  comments: string;
  companyId: number;
  currency: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateBill: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateCanceled: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateInsert: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateLock: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateMarked: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  datePayBefore: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateStatus: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateUpdate: Date;

  deducted: boolean;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  deliveryDocDate: Date;

  deliveryDocNum: unknown;
  discountValue: number;
  empCanceledId: number;
  empMarkedId: number;
  empStatusId: string;
  externalOrder: boolean;
  id: number;
  id1c: string;
  lid: string;
  lockedBy: string;
  marked: boolean;
  orderTopic: string;
  payed: boolean;

  @Type(() => PaymentDto)
  payments: PaymentDto[];

  personTypeId: number;
  personTypeXmlId: string;
  price: number;

  @Type(() => PropertyValueDto)
  propertyValues: PropertyValueDto[];

  reasonCanceled: string;
  reasonMarked: string;
  recountFlag: boolean;
  recurringId: string;
  responsibleId: number;

  @Type(() => ShipmentDto)
  shipments: ShipmentDto[];

  statGid: unknown;
  statusId: string;
  statusXmlId: string;
  storeId: unknown;
  taxValue: number;
  updated1c: boolean;
  userDescription: string;
  userId: number;
  version: number;
  version1c: string;
  xmlId: string;
}
