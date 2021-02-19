import { BasketItem } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../../transformers/date-time-transformer';
import { BasketPropertyValueDto } from './basket-property-value.dto';
import { AbstractDto } from '../abstract.dto';

export class BasketItemDto extends AbstractDto implements BasketItem {
  barcodeMulti: boolean;
  basePrice: number;
  canBuy: boolean;
  catalogXmlId: string;
  currency: string;
  customPrice: boolean;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateInsert: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateRefresh: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateUpdate: Date;

  detailPageUrl: string;
  dimensions: string;
  discountCoupon: unknown;
  discountName: string;
  discountPrice: number;
  discountValue: unknown;
  id: string;
  lid: string;
  measureCode: string;
  measureName: string;
  module: string;
  name: string;
  notes: string;
  orderId: string;
  price: number;
  priceTypeId: string;
  productId: string;
  productPriceId: string;
  productProviderClass: string;
  productXmlId: string;

  @Type(() => BasketPropertyValueDto)
  properties: BasketPropertyValueDto[];

  quantity: number;
  recommendation: unknown;
  setParentId: unknown;
  sort: number;
  subscribe: boolean;
  type: unknown;
  vatIncluded: boolean;
  vatRate: string;
  weight: number;
  xmlId: string;
}
