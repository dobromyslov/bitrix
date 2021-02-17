import { PropertyVariantApi } from './property-variant/property-variant.api';
import { StatusApi } from './status/status.api';
import { OrderApi } from './order/order.api';

/**
 * Online Shop.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/index.php
 */
export class SaleApi {
  propertyVariant: PropertyVariantApi;
  propertyGroup: unknown;
  order: OrderApi;
  tradeBinding: unknown;
  propertyValue: unknown;
  basketItem: unknown;
  statusLang: unknown;
  payment: unknown;
  shipment: unknown;
  propertyRelation: unknown;
  property: unknown;
  basketProperties: unknown;
  businessValuePersonDomain: unknown;
  status: StatusApi;
  shipmentItem: unknown;
  personType: unknown;
  tradePlatform: unknown;

  constructor(webhookUrl: string) {
    this.propertyVariant = new PropertyVariantApi(webhookUrl);
    this.propertyGroup = undefined;
    this.order = new OrderApi(webhookUrl);
    this.tradeBinding = undefined;
    this.propertyValue = undefined;
    this.basketItem = undefined;
    this.statusLang = undefined;
    this.payment = undefined;
    this.shipment = undefined;
    this.propertyRelation = undefined;
    this.property = undefined;
    this.basketProperties = undefined;
    this.businessValuePersonDomain = undefined;
    this.status = new StatusApi(webhookUrl);
    this.shipmentItem = undefined;
    this.personType = undefined;
    this.tradePlatform = undefined;
  }
}
