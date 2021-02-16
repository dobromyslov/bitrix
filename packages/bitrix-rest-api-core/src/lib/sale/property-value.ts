/**
 * Order property value.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyvalue/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyvalue/sale_propertyvalue_getFields.php
 */
export interface PropertyValue {
  /**
   * Property ID.
   * Example: "458"
   */
  id: number;

  /**
   * Property name.
   * Example: "Имя и Фамилия", "Телефон"
   */
  name: string;

  /**
   * Property value.
   * Can be an array if multiple is true.
   * Example: "Верховный Админ" or ["code1", "code2"]
   */
  value: unknown | unknown[];

  /**
   * Property code.
   * Example: "FIO", "PHONE"
   */
  code: string;

  /**
   * Order ID.
   * Example:
   */
  orderId?: number;

  /**
   * Order property ID.
   * Example: "1", "2"
   */
  orderPropsId: number;

  /**
   * Order property external ID.
   * Example: "bx_5fa52afb6e01a"
   */
  orderPropsXmlId: string;
}
