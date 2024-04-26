import { appController } from './sdk/appModule';

(async () => {
  const result = await appController.getGeoInfo(null, null, { ip: '178.205.123.22' });

  console.log(result);
})();
