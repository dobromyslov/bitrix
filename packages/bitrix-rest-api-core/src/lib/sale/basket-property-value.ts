/**
 * Basket property value.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/basketproperties/resource.php
 */
export interface BasketPropertyValue {
  /**
   * Basket ID.
   * Example: "346"
   */
  basketId: string;

  /**
   * Property Code.
   * Example: "NAME"
   */
  code: string;

  /**
   * Product ID.
   * Example: "2406"
   */
  id: string;

  /**
   * Property name.
   * Example: "Название товара"
   */
  name: string;

  /**
   * Property sort number to order by.
   * Example: "100"
   */
  sort: number;

  /**
   * Property value.
   * Example: "Детская пенка &quot;2 в 1&quot; для мытья волос и тела с первых дней жизни (&quot;Без слёз&quot;)  &quot;Kewpie&quot; (помпа 400 мл) / 12"
   */
  value: unknown;

  /**
   * External ID.
   * Example: "bx_5fd9e56d89a37"
   */
  xmlId: string;
}
