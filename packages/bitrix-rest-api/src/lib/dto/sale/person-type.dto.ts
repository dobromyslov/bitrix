import { AbstractDto } from '../abstract.dto';
import { PersonType } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class PersonTypeDto extends AbstractDto implements PersonType {
  @Type(() => String)
  @Transform(yesNoTransformer)
  active: boolean;

  code: string;
  id: string;
  lid: string;
  name: string;
  sort: number;
  xmlId: string;
}
