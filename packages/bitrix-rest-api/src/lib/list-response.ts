/**
 * Response from `list()` API methods.
 * @see https://dev.1c-bitrix.ru/rest_help/general/lists.php
 */
export interface ListResponse<T> {
  /**
   * List method result.
   */
  result: T[];

  /**
   * Total records count in the system.
   * It's buggy. There are cases when `total` is 70 but `result` is empty.
   */
  total: number;

  /**
   * Record index to get next page.
   * If `next` is defined then there is another page available for fetching.
   * It should be passed into `start` parameter of `list()` method.
   */
  next?: number;
}
