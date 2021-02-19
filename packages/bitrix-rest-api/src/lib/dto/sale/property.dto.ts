import { AbstractDto } from '../abstract.dto';
import { Property } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { PropertySettingsDto } from './property-settings.dto';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class PropertyDto extends AbstractDto implements Property {
  @Type(() => String)
  @Transform(yesNoTransformer)
  active: boolean;

  code: string;
  defaultValue: unknown;
  description: string;
  id: number;
  inputFieldLocation: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isAddress: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isEmail: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isFiltered: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isLocation: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isLocation4tax: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isPayer: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isPhone: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isProfileName: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isZip: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  multiple: boolean;

  name: string;
  personTypeId: number;
  propsGroupId: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  required: boolean;

  @Type(() => PropertySettingsDto)
  settings: PropertySettingsDto;

  sort: number;
  type: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  userProps: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  util: boolean;

  xmlId: string;
}
