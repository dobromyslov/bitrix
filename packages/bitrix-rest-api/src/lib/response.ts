import { ResponseTime } from './response-time';

export interface Response<T> {
  /**
   * Result list of entities.
   * Examples:
   * 1. Single entity:
   *    {
   *      "status": {
   *        "color": "",
   *        "id": "XX",
   *        "notify": "N",
   *        "sort": "0",
   *        "type": "D",
   *        "xmlId": "bx_602c3442dbeee"
   *      }
   *    }
   * 2. List of entities:
   *    {
   *      statuses: [
   *        {
   *          ...
   *        }, {
   *          ...
   *        }
   *      ]
   *    }
   * 3. Scalar value:
   *    true
   */
  result?: T;

  next?: number;

  /**
   * Count of entities in the result.
   */
  total?: number;

  time?: ResponseTime;

  error?: number;

  error_description?: string;
}
