import { Lookup } from 'geoip-lite';
import { GeoInfo } from './geo-info-interface';
import { NotFoundException } from '@nestjs/common';
import { Worker } from 'worker_threads';

export class GeoLiteInfo implements GeoInfo {
  async getGeoInfo(ip: string) {
    // так как библиотека geoip-lite синхронная, выносим ее в новый поток чтобы не заблокировать главный если что
    const geoInfo = await new Promise<Lookup>((resolve, reject) => {
      const worker = new Worker('./src/geo/getFromGeoIpLite.js', { workerData: ip });
      worker.on('message', (message) => {
        resolve(message);
      });
      worker.on('error', (err) => {
        reject(err);
      });
    });
    if (!geoInfo) throw new NotFoundException('нет данных по этому ip');
    return {
      lat: geoInfo.ll[0],
      lng: geoInfo.ll[1],
      country: geoInfo.country,
      city: geoInfo.city,
    };
  }
}
