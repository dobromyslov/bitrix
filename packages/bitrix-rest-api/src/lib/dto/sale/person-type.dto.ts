import { AbstractDto } from '../abstract.dto';
import { PersonType } from 'bitrix-rest-api-core';

export class PersonTypeDto extends AbstractDto implements PersonType {
  active: boolean;
  code: string;
  id: string;
  lid: string;
  name: string;
  sort: number;
  xmlId: string;
}
