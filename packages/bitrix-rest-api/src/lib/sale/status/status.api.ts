import { AbstractEndpoint } from '../../abstract-endpoint';
import { Field, Status } from 'bitrix-rest-api-core';
import { ListOptions } from '../../list-options';
import { ListResponse } from '../../list-response';

export class StatusApi extends AbstractEndpoint {
  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_add.php
   * @param id
   * @param type
   */
  async add(id: string, type: string): Promise<Status> {
    return this._execute<{status: Status}>(
      'sale.status.add',
      {
        fields: {
          id,
          type
        }
      }
    ).then(response => response?.result?.status);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_delete.php
   * @param id
   */
  async delete(id: string): Promise<boolean> {
    return this._execute<boolean>(
      'sale.status.delete',
      {
        id
      }
    ).then(response => response?.result)
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_get.php
   * @param id
   */
  async get(id: string): Promise<Status> {
    return this._execute<{status: Status}>(
      'sale.status.get',
      {
        id
      }
    ).then(response => response?.result?.status);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_getFields.php
   */
  async getFields(): Promise<Record<keyof Status, Field>> {
    return this._execute<{status: Record<keyof Status, Field>}>(
      'sale.status.getFields'
    ).then(response => response?.result?.status);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_list.php
   */
  async list(options?: ListOptions<Status>): Promise<ListResponse<Status>> {
    return this._executeList<Status>(
      'sale.status.list',
      'statuses',
      options
    );
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/status/sale_status_update.php
   * @param id
   * @param fields
   */
  async update(id: string, fields: Partial<Status>): Promise<Status> {
    return this._execute<{status: Status}>(
      'sale.status.update',
      {
        id,
        fields
      }
    ).then(response => response?.result?.status);
  }
}
