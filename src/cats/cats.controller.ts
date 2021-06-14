import { Controller, Get, Post, Query, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This Action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
