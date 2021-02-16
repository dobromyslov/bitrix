/**
 * Property Variant.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyVariant/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyVariant/sale_propertyVariant_getFields.php
 */
export interface PropertyVariant {
  /**
   * ID.
   * Example: "10"
   */
  id: number;

  /**
   * Name.
   * Example: "Размер"
   */
  name: string;

  /**
   * Description.
   * Example:
   */
  description?: string;

  /**
   * Binding to the property ID.
   * Example: "39"
   */
  orderPropsId: number;

  /**
   * Sort number to order by in lists.
   * Example: "100"
   */
  sort: number;

  /**
   * Value.
   * Example: "M"
   */
  value: unknown;
}
