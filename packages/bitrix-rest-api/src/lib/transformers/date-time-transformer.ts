import {TransformationType, TransformFnParams} from 'class-transformer';
import {DateTime} from 'luxon';

export function dateTimeTransformer({type, value}: TransformFnParams): Date | string {
  if (!value) {
    return value;
  }

  switch (type) {
    case TransformationType.PLAIN_TO_CLASS:
      return DateTime.fromISO(value as string).toJSDate();

    case TransformationType.CLASS_TO_PLAIN:
      return JSON.stringify(value as Date);

    default:
      return value;
  }
}
