export interface ListOptions<T> {
  select?: Array<keyof T>;
  
  /**
   * Examples:
   * 1. By ID:
   * {
   *   id: '7'
   * }
   * 2. By dates interval
   * {
   *   '>=dateUpdate': '17.02.2021 00:00:00', // dd.MM.yyyy HH:mm:ss
   *   '<=dateUpdate': '18.02.2021 23:59:59
   * }
   */
  filter?: Partial<T> | Record<string, unknown>;

  order?: Record<keyof T, 'asc' | 'desc'>;

  /**
   * Start from the record number received from the `next` attribute
   * of the response.
   * It's used for pagination because bitrix returns max 50 records.
   * If `next` < `total` and result is not empty then continue to the next page.
   */
  start?: number;
}
