import { AbstractEndpoint } from '../../abstract-endpoint';
import { ListOptions } from '../../list-options';
import { Field, Order } from 'bitrix-rest-api-core';
import { ListResponse } from '../../list-response';

export interface OrderTryAddOrUpdateResult extends Order {
  /**
   * List of delivery services.
   * Example:
   */
  deliveryIdListAction: unknown[];

  /**
   * List of payment systems.
   * Example:
   */
  paySystemIdList: unknown[];
}

/**
 * @see https://dev.1c-bitrix.ru/rest_help/sale/order/index.php
 */
export class OrderApi extends AbstractEndpoint {
  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_add.php
   * @param order
   */
  async add(order: Partial<Order>): Promise<Order> {
    return this._execute<{order: Order}>(
      'sale.order.add',
      {
        fields: order
      }
    ).then(response => response?.result?.order);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_delete.php
   * @param id
   */
  async delete(id: string): Promise<boolean> {
    return this._execute<boolean>(
      'sale.order.delete',
      {
        id
      }
    ).then(response => response?.result);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_get.php
   * @param id
   */
  async get(id: string): Promise<Order> {
    return this._execute<{order: Order}>(
      'sale.order.get',
      {
        id
      }
    ).then(response => response?.result?.order);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_getFields.php
   */
  async getFields(): Promise<Record<keyof Order, Field>> {
    return this._execute<{fields: Record<keyof Order, Field>}>(
      'sale.order.getFields'
    ).then(response => response?.result?.fields);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_list.php
   * @param options
   */
  async list(options?: ListOptions<Order>): Promise<ListResponse<Order>> {
    return this._executeList<Order>(
      'sale.order.list',
      'orders',
      options
    );
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_tryadd.php
   * @param order
   */
  async tryadd(order: Partial<Order>): Promise<OrderTryAddOrUpdateResult> {
    return this._execute<{order: OrderTryAddOrUpdateResult}>(
      'sale.order.tryadd',
      {
        fields: order
      }
    ).then(response => response?.result?.order);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_tryupdate.php
   * @param id
   * @param order
   */
  async tryupdate(id: string, order: Partial<Order>): Promise<OrderTryAddOrUpdateResult> {
    return this._execute<{order: OrderTryAddOrUpdateResult}>(
      'sale.order.tryupdate',
      {
        id,
        fields: order
      }
    ).then(response => response?.result?.order);
  }

  /**
   * @see https://dev.1c-bitrix.ru/rest_help/sale/order/sale_order_update.php
   * @param id
   * @param order
   */
  async update(id: string, order: Partial<Order>): Promise<Order> {
    return this._execute<{order: Order}>(
      'sale.order.update',
      {
        id,
        fields: order
      }
    ).then(response => response?.result?.order);
  }
}
