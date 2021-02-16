/**
 * Order Property Settings.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/property/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/property/sale_property_getFieldsByType.php
 */
export interface PropertySettings {
  maxlength: number;
  minlength: number;
  multiline: boolean;
  pattern: string;
  size: number;
}
