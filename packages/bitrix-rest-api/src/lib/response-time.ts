export interface ResponseTime {
  /**
   * Example: 1613507181.092902
   */
  start: number;

  /**
   * Example: 1613507181.110797
   */
  finish: number;

  /**
   * Example: 0.017894983291625977
   */
  duration: number;

  /**
   * Example: 0.007779121398925781
   */
  processing: number;
  /**
   * JSON timestamp.
   * Example: '2021-02-16T23:26:21+03:00'
   */
  date_start: string;

  /**
   * JSON timestamp.
   * Example: '2021-02-16T23:26:21+03:00'
   */
  date_finish: string;
}
