import { BasketItem } from './basket-item';
import { Payment } from './payment';
import { Shipment } from './shipment';
import { PropertyValue } from './property-value';

/**
 * Order.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/order/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_getFields.php
 */
export interface Order {
  /**
   * Order ID.
   * Example: "81"
   */
  id: number;

  /**
   * Bitrix site ID.
   * Example: "s1"
   */
  lid: string;

  /**
   * Order creation timestamp.
   * Example: "2018-08-17T15:21:02+03:00"
   */
  dateInsert: Date;

  /**
   * Order update date.
   * Example: "2018-08-17T18:18:21+03:00"
   */
  dateUpdate: Date;

  /**
   * Payer type ID.
   * Example: "1"
   */
  personTypeId: number;

  /**
   * Example: "bx_5fa52a9a9af81"
   */
  personTypeXmlId: string;

  /**
   * Order status ID.
   * Example: "N", "F"
   */
  statusId: string;

  /**
   * Example:
   */
  statusXmlId?: string;

  /**
   * Status change timestamp.
   * Example: "2018-08-17T15:20:59+03:00"
   */
  dateStatus: Date;

  /**
   * User ID who changed status.
   * Example: "1"
   */
  empStatusId: string;

  /**
   * Is order marked.
   * Example: "N"
   */
  marked: boolean;

  /**
   * Timestamp when the order was marked.
   */
  dateMarked?: Date;

  /**
   * User ID who marked the order.
   */
  empMarkedId?: number;

  /**
   * Reason of the order mark.
   */
  reasonMarked?: string;

  /**
   * Total sum.
   * Example: "4627.3000" or 2255.16
   */
  price: number;

  /**
   * Total discount sum.
   * Example: "0.0000" or 0
   */
  discountValue: number;

  /**
   * Tax rate.
   * TODO: Figure out if it rate or sum
   * Example: "0.00"
   */
  taxValue: number;

  /**
   * Order description filled by the user.
   * Example: ""
   */
  userDescription: string;

  /**
   * Additional information.
   */
  additionalInfo?: string;

  /**
   * Comments.
   * Example: ""
   */
  comments?: string;

  /**
   * Company ID.
   * Example: "0"
   */
  companyId: number;

  /**
   * Responsible user ID.
   */
  responsibleId?: number;

  statGid?: unknown;
  datePayBefore: Date;
  dateBill: Date;

  /**
   * Recurring subscription code.
   */
  recurringId?: string;

  /**
   * Who locked the order.
   * Example: "1"
   */
  lockedBy: string;

  /**
   * Timestamp when the order was blocked.
   * Example: "2018-08-17T18:16:32+03:00"
   */
  dateLock: Date;

  /**
   * Recount flag.
   * Example: "Y"
   */
  recountFlag: boolean;

  /**
   * Affiliate ID.
   */
  affiliateId?: number;

  deliveryDocNum?: unknown;
  deliveryDocDate?: Date;

  /**
   * The order was updated from 1C.
   * Example: "N"
   */
  updated1c: boolean;

  /**
   * Order topic (subject).
   */
  orderTopic?: string;

  /**
   * External order ID.
   * Example: "bx_5fc8ad8111328"
   */
  xmlId: string;

  /**
   * Order ID in 1C.
   */
  id1c?: string;

  /**
   * Version in 1C.
   */
  version1c?: string;

  /**
   * Document version.
   * Example: "53"
   */
  version: number;

  /**
   * Is order from external system.
   * Example: "N"
   */
  externalOrder: boolean;

  storeId: unknown;

  /**
   * Is order canceled.
   * Example: "N"
   */
  canceled: boolean;

  /**
   * User ID who canceled the order.
   */
  empCanceledId?: number;

  /**
   * Timestamp when the order was canceled.
   */
  dateCanceled?: Date;

  /**
   * Cancel reason.
   */
  reasonCanceled?: string;

  /**
   * Basket items list.
   */
  basketItems: BasketItem[];

  /**
   * Property values.
   */
  propertyValues: PropertyValue[];

  /**
   * Payments.
   */
  payments: Payment[];

  /**
   * Shipments.
   * @see https://dev.1c-bitrix.ru/rest_help/sale/shipment/resource.php
   */
  shipments: Shipment[];

  /**
   * Example: "68"
   */
  accountNumber: string;

  /**
   * Currency ISO code.
   * Example: "RUB"
   */
  currency: string;

  /**
   * Is shipped.
   * Example: "N"
   */
  deducted: boolean;

  /**
   * Is payed.
   * Example: "Y"
   */
  payed: boolean;

  /**
   * Example: "1"
   */
  userId: number;
}
