import { AbstractDto } from '../abstract.dto';
import { Status } from 'bitrix-rest-api-core';

export class StatusDto extends AbstractDto implements Status {
  color: string;
  id: string;
  notify: boolean;
  sort: number;
  type: string;
  xmlId: string;
}
