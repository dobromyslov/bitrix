import { PropertySettings } from './property-settings';

/**
 * Order property.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/property/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/property/sale_property_getFieldsByType.php
 */
export interface Property {
  /**
   * Order property ID.
   * Example: "20"
   */
  id: number;

  /**
   * Payer type ID.
   * Example: "1"
   */
  personTypeId: number;

  /**
   * Property name.
   * Example: "test ENUM", "Имя и Фамилия"
   */
  name: string;

  /**
   * Type.
   * Example: "ENUM", "STRING"
   */
  type: string;

  /**
   * Is required.
   * Example: "N"
   */
  required: boolean;

  /**
   * Default value.
   * Example:
   */
  defaultValue: unknown;

  /**
   * Sort number to order by in list.
   * Example: "100"
   */
  sort: number;

  /**
   * Is included in the user profile.
   * Example: "N"
   */
  userProps: boolean;

  /**
   * Is geo location.
   * Example: "N"
   */
  isLocation: boolean;

  /**
   * Property group ID.
   * Example: "2"
   */
  propsGroupId: number;

  /**
   * Description.
   * Example:
   */
  description: string;

  /**
   * Is email
   * Example: "N"
   */
  isEmail: boolean;

  /**
   * Is user profile name.
   * Example: "N"
   */
  isProfileName: boolean;

  /**
   * Is used as a payer name.
   * Example: "N"
   */
  isPayer: boolean;

  /**
   * Is used as a location for taxes.
   * Example: "N"
   */
  isLocation4tax: boolean;

  /**
   * Is available in the orders filter.
   * Example: "N"
   */
  isFiltered: boolean;

  /**
   * Property code.
   * Example: "FIO", "PHONE"
   */
  code: string;

  /**
   * Is used as a postal index (ZIP).
   * Example: "N"
   */
  isZip: boolean;

  /**
   * Is a phone number.
   * Example: "N"
   */
  isPhone: boolean;

  /**
   * Is an address.
   * Example: "N"
   */
  isAddress: boolean;

  /**
   * Is active.
   * Example: "Y"
   */
  active: boolean;

  /**
   * Is service / internal.
   * Example: "N"
   */
  util: boolean;

  /**
   * Where the input field is located.
   * Example: "0"
   */
  inputFieldLocation: number;

  /**
   * Can contain multiple values.
   * Example: "Y"
   */
  multiple: boolean;

  /**
   * Settings.
   * Example:
   */
  settings?: PropertySettings;

  /**
   * Property external ID.
   * Example: "bx_5fbcbae4c2146"
   */
  xmlId: string;
}
