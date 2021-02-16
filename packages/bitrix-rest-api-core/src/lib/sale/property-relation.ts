/**
 * Property binding / relation.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyRelation/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/propertyRelation/sale_propertyRelation_getFields.php
 */
export interface PropertyRelation {
  /**
   * Entity ID.
   * Example: "6"
   */
  entityId: number;

  /**
   * Entity type.
   * Example: "D"
   */
  entityType: string;

  /**
   * Property ID.
   * Example: "40"
   */
  propertyId: number;
}
