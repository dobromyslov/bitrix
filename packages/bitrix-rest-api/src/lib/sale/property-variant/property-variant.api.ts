import { AbstractEndpoint } from '../../abstract-endpoint';
import { Field, PropertyVariant } from 'bitrix-rest-api-core';
import { ListOptions } from '../../list-options';
import { ListResponse } from '../../list-response';

export class PropertyVariantApi extends AbstractEndpoint {

  async add(propertyVariant: PropertyVariant): Promise<PropertyVariant> {
    return this._execute<{propertyVariant: PropertyVariant}>(
      'sale.propertyVariant.add',
      {
        fields: propertyVariant
      }
    ).then(response => response?.result?.propertyVariant);
  }

  async delete(id: string): Promise<boolean> {
    return this._execute<boolean>(
      'sale.propertyVariant.delete',
      {
        id
      }
    ).then(response => response?.result);
  }

  async get(id: string): Promise<PropertyVariant> {
    return this._execute<{propertyVariant: PropertyVariant}>(
      'sale.propertyVariant.get',
      {
        id
      }
    ).then(response => response?.result?.propertyVariant);
  }

  async getFields(): Promise<Record<keyof PropertyVariant, Field>> {
    return this._execute<{propertyVariant: Record<keyof PropertyVariant, Field>}>(
      'sale.propertyVariant.getFields'
    ).then(response => response?.result?.propertyVariant);
  }

  async list(options: ListOptions<PropertyVariant>): Promise<ListResponse<PropertyVariant>> {
    return this._executeList<PropertyVariant>(
      'sale.propertyVariant.list',
      'propertyVariant',
      options
    );
  }

  async update(id: string, fields: Partial<PropertyVariant>): Promise<PropertyVariant> {
    return this._execute<{propertyVariant: PropertyVariant}>(
      'sale.propertyVariant.update',
      {
        id,
        fields
      }
    ).then(response => response?.result?.propertyVariant);
  }
}
