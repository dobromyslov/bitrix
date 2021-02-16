/**
 * Shipment.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/shipment/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/shipment/sale_shipment_getFields.php
 */
import { ShipmentItem } from './shipment-item';

export interface Shipment {
  /**
   * Shipment ID.
   * Example: "182"
   */
  id: string;

  /**
   * External ID.
   * Example: "bx_5fc8ad811a84f"
   */
  xmlId: string;

  /**
   * Order ID.
   * Example: "81"
   */
  orderId: string;

  /**
   * Shipment status ID.
   * Example: "DN"
   */
  statusId: string;

  /**
   * Example:
   */
  statusXmlId?: string;

  /**
   * Raw delivery price.
   * Example: "500.0000", 0
   */
  basePriceDelivery: number;

  /**
   * Total delivery price with discounts and extra charges.
   * Example: "500.0000", 0
   */
  priceDelivery: number;

  /**
   * Is manually set.
   * Example: "N"
   */
  customPriceDelivery: boolean;

  /**
   * Currency ISO code.
   * Example: "RUB"
   */
  currency: string;

  /**
   * Sum of discount or extra charge.
   * Example:
   */
  discountPrice?: number;

  /**
   * Is delivery allowed.
   * Example: "Y"
   */
  allowDelivery: boolean;

  /**
   * Timestamp when delivery became allowed = true.
   * Example: "2018-08-17T17:33:17+03:00"
   */
  dateAllowDelivery?: Date;

  /**
   * User ID who allowed delivery.
   * Example: "1"
   */
  empAllowDeliveryId?: string;

  /**
   * Is shipped.
   * Example: "N"
   */
  deducted: boolean;

  /**
   * Timestamp when the shipment was shipped.
   * Example:
   */
  dateDeducted?: Date;

  /**
   * User ID who shipped the shipment.
   * Example:
   */
  empDeductedId?: number;

  /**
   * Reason of the shipment cancellation.
   * Example:
   */
  reasonUndoDeducted?: string;

  /**
   * Delivery service ID.
   * Example: "1"
   */
  deliveryId: string;

  /**
   * Delivery document ID.
   * Example: "000000001"
   */
  deliveryDocNum?: string;

  /**
   * Delivery document date.
   * Example:
   */
  deliveryDocDate?: Date;

  /**
   * Tracking number.
   * Example: "0000000002"
   */
  trackingNumber?: string;

  /**
   * Tracking status.
   * Example:
   */
  trackingStatus?: string;

  /**
   * Tracking description.
   * Example:
   */
  trackingDescription?: string;

  /**
   * Timestamp when the tracking status was checked last time.
   * Example:
   */
  trackingLastCheck?: Date;

  /**
   * Delivery service name.
   * Example: "Доставка курьером"
   */
  deliveryName: string;

  /**
   * Is canceled.
   * Example: "N"
   */
  canceled: boolean;

  /**
   * Timestamp when was canceled.
   * Example:
   */
  dateCanceled?: Date;

  /**
   * User ID who canceled.
   * Example:
   */
  empCanceledId?: number;

  /**
   * Is marked.
   * Example: "N"
   */
  marked: boolean;

  /**
   * Timestamp when was marked.
   * Example:
   */
  dateMarked?: Date;

  /**
   * User ID who marked.
   * Example:
   */
  empMarkedId?: number;

  /**
   * Reason of marking.
   * Example:
   */
  reasonMarked?: string;

  /**
   * Is system / internal shipment.
   * Example: "N"
   */
  system: boolean;

  /**
   * User ID who is responsible for the shipment.
   * Example: "1"
   */
  responsibleId?: number;

  /**
   * User ID who assigned a responsible user.
   * Example: "1"
   */
  empResponsibleId?: number;

  /**
   * Timestamp when the responsible user was assigned.
   * Example: "2018-08-17T17:33:17+03:00"
   */
  dateResponsibleId?: Date;

  /**
   * Comment.
   * Example: "Комментарий"
   */
  comments?: string;

  /**
   * Company ID which is performing the shipment.
   * Example: "0"
   */
  companyId: string;

  /**
   * Is updated from 1C.
   * Example: "N"
   */
  updated1c: boolean;

  /**
   * Shipment document ID in 1C.
   * Example:
   */
  id1c?: string;

  /**
   * Shipment document version in 1C.
   * Example:
   */
  version1c?: string;

  /**
   * Is from external system.
   * Example: "N"
   */
  externalDelivery: boolean;

  /**
   * Example:
   */
  shipmentItems: ShipmentItem[];

  /**
   * Example: "68/2"
   */
  accountNumber: string;

  /**
   * Example: "2020-12-03T12:18:57+03:00"
   */
  dateInsert: Date;

  /**
   * Example:
   */
  deliveryXmlId?: string;
}
