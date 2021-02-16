/**
 * Marketplace.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/tradePlatform/sale_tradePlatform_getFields.php
 */
export interface TradePlatform {
  /**
   * Is active.
   * Example: "Y"
   */
  active: boolean;

  /**
   * Service/Internal field.
   * Example:
   */
  catalogSectionTabClassName?: unknown;

  /**
   * PHP class name of the handler.
   * Example:
   */
  class?: string;

  /**
   * Marketplace code.
   * Example: "ymarket"
   */
  code: string;

  /**
   * Marketplace description.
   * Example: "Интеграция магазина с программой Яндекса \"Покупка на Маркете\""
   */
  description: string;

  /**
   * Marketplace ID.
   * Example: "1"
   */
  id: number;

  /**
   * Marketplace name.
   * Example: "Покупки на Яндекс-Маркете"
   */
  name: string;

  /**
   * Marketplace settings.
   * Example:
   */
  settings?: unknown | unknown[];

  /**
   * External ID.
   * Example:
   */
  xmlId?: string;
}
