import { PropertyVariantApi } from './property-variant.api';
import { environment } from '../../../environments/environment';

describe('PropertyVariant', () => {
  it('should list', async () => {
    const result = await new PropertyVariantApi(environment.webhookUrl)
      .list();

    //console.log(result);
  });
});
