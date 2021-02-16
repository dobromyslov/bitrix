/**
 * Mapping to person and company.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/businessValuePersonDomain/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/businessValuePersonDomain/sale_businessValuePersonDomain_getFields.php
 */
export interface BusinessValuePersonDomain {
  /**
   * Domain.
   * Example: "I"
   */
  domain: string;

  /**
   * Payer type ID.
   * Example: "1"
   */
  personTypeId: number;
}
