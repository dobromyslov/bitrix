/**
 * Shipment Item.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/shipmentitem/resource.php
 */
export interface ShipmentItem {
  /**
   * Example: false
   */
  isChanged: boolean;

  /**
   * Example: "278"
   */
  id: string;

  /**
   * Example: "182"
   */
  orderDeliveryId: string;

  /**
   * Example: "171"
   */
  basketId: string;

  /**
   * Example: "2018-08-17T16:21:18+03:00"
   */
  dateInsert: string;

  /**
   * Example: "1.0000"
   */
  quantity: number;

  /**
   * Example: "0.0000"
   */
  reservedQuantity: number;

  /**
   * Example: "bx_5fc8ad811b2a6"
   */
  xmlId: string;
}
