/// Auto-generated file (nest-sdk-generator)
/// Please do not edit this file - re-generate the SDK using the generator instead.
/// Generated on: Fri, 26 Apr 2024 07:24:04 GMT
///
/// Parent module: appModule
/// Controller: "appController" registered as "appController" (1 routes)

import { request } from '../central';
import type { GeoResponseDto } from '../_types/src/geo/dto/geo-dto';

export default {
  // GET @
  getGeoInfo(
    params: {} = {},
    body: {} = {},
    query: {} = {},
  ): Promise<GeoResponseDto> {
    return request('GET', ``, body, query);
  },
};
