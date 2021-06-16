import { Body, Controller, Get, Post, Query, Redirect } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  async findAll(): Promise<string> {
    return 'This action return cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
