import { Injectable } from '@nestjs/common';
import { GeoResponseDto } from './geo/dto/geo-dto';
import { GeoLiteInfo } from './geo/geo-info-lite';
import { GeoInfo } from './geo/geo-info-interface';

@Injectable()
export class AppService {
  geoInformator: GeoInfo;
  constructor() {
    this.geoInformator = new GeoLiteInfo();
  }
  async getGeoInfo(ip: string): Promise<GeoResponseDto> {
    return await this.geoInformator.getGeoInfo(ip);
  }
}
