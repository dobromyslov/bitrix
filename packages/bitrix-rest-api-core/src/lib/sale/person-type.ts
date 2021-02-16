/**
 * Payer type.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/persontype/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/persontype/sale_persontype_getFields.php
 */
export interface PersonType {
  /**
   * Payer type ID.
   * Example: "1"
   */
  id: string;

  /**
   * Site ID.
   * Example: "s1"
   */
  lid: string;

  /**
   * Payer type name.
   * Example: "Физическое лицо"
   */
  name: string;

  /**
   * Sorting number to order by in the list.
   * Example: "100"
   */
  sort: number;

  /**
   * Is active.
   * Example: "Y"
   */
  active: boolean;

  /**
   * Payer type code.
   * Example: "test"
   */
  code: string;

  /**
   * External ID.
   * Example: "bx_5fa52a9a9af81"
   */
  xmlId: string;
}
