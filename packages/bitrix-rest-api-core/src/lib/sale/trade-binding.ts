/**
 * Marketplace order binding.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/tradebinding/sale_tradeBinding_getFields.php
 */
export interface TradeBinding {
  /**
   * Binding ID.
   * Example:
   */
  id: number;

  /**
   * Binding external ID.
   * Example:
   */
  xmlId: string;

  /**
   * External order ID.
   * Example:
   */
  externalOrderId: string;

  /**
   * Order ID.
   * Example:
   */
  orderId: number;

  /**
   * Marketplace ID.
   * Example:
   */
  tradingPlatformId: number;

  /**
   * Marketplace external ID.
   * Example:
   */
  tradingPlatformXmlId: string;

  /**
   * This field stores additional information.
   * Example:
   */
  params: unknown;
}
