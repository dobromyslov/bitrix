/**
 * Status.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/status/.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_getFields.php
 */
export interface Status {
  /**
   * Status ID.
   * Example: "fw", "DF"
   */
  id: string;

  /**
   * Status type.
   * Example: "O", "D"
   */
  type: string;

  /**
   * Sorting number to order statuses by in the list.
   * Example: "100"
   */
  sort: number;

  /**
   * Is notification enabled.
   * Example: "Y"
   */
  notify: boolean;

  /**
   * Status color as a color string.
   * Example: "#FF5C5B"
   */
  color?: string;

  /**
   * Example:
   */
  xmlId?: string;
}
