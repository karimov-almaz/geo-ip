import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GeoResponseDto, InputIpDto } from './geo/dto/geo-dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'ОК',
    type: GeoResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Нет данных по этому ip',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Ошибка формата ip',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Ошибка сервера',
  })
  async getGeoInfo(@Query() params: InputIpDto): Promise<GeoResponseDto> {
    return await this.appService.getGeoInfo(params.ip);
  }
}
