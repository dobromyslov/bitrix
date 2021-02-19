import { AbstractDto } from '../abstract.dto';
import { Property } from 'bitrix-rest-api-core';
import { Type } from 'class-transformer';
import { PropertySettingsDto } from './property-settings.dto';

export class PropertyDto extends AbstractDto implements Property {
  active: boolean;
  code: string;
  defaultValue: unknown;
  description: string;
  id: number;
  inputFieldLocation: number;
  isAddress: boolean;
  isEmail: boolean;
  isFiltered: boolean;
  isLocation: boolean;
  isLocation4tax: boolean;
  isPayer: boolean;
  isPhone: boolean;
  isProfileName: boolean;
  isZip: boolean;
  multiple: boolean;
  name: string;
  personTypeId: number;
  propsGroupId: number;
  required: boolean;

  @Type(() => PropertySettingsDto)
  settings: PropertySettingsDto;
  
  sort: number;
  type: string;
  userProps: boolean;
  util: boolean;
  xmlId: string;
}
