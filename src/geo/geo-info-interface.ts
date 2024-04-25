import { GeoResponseDto } from './dto/geo-dto';

export interface GeoInfo {
  getGeoInfo: (ip: string) => Promise<GeoResponseDto>;
}
