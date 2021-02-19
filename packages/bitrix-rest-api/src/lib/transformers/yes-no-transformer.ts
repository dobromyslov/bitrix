import { TransformationType, TransformFnParams } from 'class-transformer';

export function yesNoTransformer(
  {type, value}: TransformFnParams
): boolean | string {
  if (!value) {
    return value;
  }

  switch (type) {
    case TransformationType.PLAIN_TO_CLASS:
      return value === 'Y';

    case TransformationType.CLASS_TO_PLAIN:
      return value ? 'Y' : 'N';

    default:
      return value;
  }
}
