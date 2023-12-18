import {
  Controller,
  HttpCode,
  Get,
  Post,
  Req,
  Param,
  Body,
  Header,
  Redirect,
  HostParam,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  //   @Post()
  //   @Header('Cache-Control', 'none') //请求头
  //   @HttpCode(204) //状态码
  //   create(): string {
  //     return 'This action adds a new cat';
  //   }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return `This action adds a new cat`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}

// 子域路由
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
}

// demo req
/* 
@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
*/
