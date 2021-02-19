import { AbstractDto } from '../abstract.dto';
import { BusinessValuePersonDomain } from 'bitrix-rest-api-core';

export class BusinessValuePersonDomainDto extends AbstractDto implements BusinessValuePersonDomain {
  domain: string;
  personTypeId: number;
}
