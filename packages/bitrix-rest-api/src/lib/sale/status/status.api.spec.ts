import { StatusApi } from './status.api';
import { environment } from '../../../environments/environment';

describe('StatusApi', () => {
  const statusApi = new StatusApi(environment.webhookUrl);

  it('should list', async () => {
    const result = await statusApi.list();
    //console.log(result);
  });
});
