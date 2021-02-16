/**
 * Property Group.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertygroup/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertygroup/sale_propertygroup_getFields.php
 */
export interface PropertyGroup {
  /**
   * ID.
   * Example: "1"
   */
  id: number;

  /**
   * Payer type ID.
   * Example: "1"
   */
  personTypeId: number;

  /**
   * Property group name.
   * Example: "Личные данные", "Свойства заказа", "Данные для доставки"
   */
  name: string;

  /**
   * Sort number to order by in lists.
   * Example: "0"
   */
  sort: number;
}
