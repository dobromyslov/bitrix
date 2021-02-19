import { AbstractDto } from '../abstract.dto';
import { StatusLang } from 'bitrix-rest-api-core';

export class StatusLangDto extends AbstractDto implements StatusLang {
  description: string;
  lid: string;
  name: string;
  statusId: string;
}
