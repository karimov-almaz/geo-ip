import { Validate } from 'class-validator';
import { IpValidator } from '../ip-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GeoResponseDto {
  @ApiProperty()
  lat: number;
  @ApiProperty()
  lng: number;
  @ApiProperty()
  country: string;
  @ApiProperty()
  city: string;
}

export class InputIpDto {
  @ApiProperty({ description: 'IP адрес в формате IPv4/IPv6' })
  @Validate(IpValidator)
  ip: string;
}
