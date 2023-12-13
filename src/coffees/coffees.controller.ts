import { Controller, Get, Param, Post, Body, Res, Patch } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('i love coffee');
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `i love #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(id: string, body) {
    return `This action updates #${id} coffee`;
  }
}
