import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'hello world'
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear}`
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this is one --- ${movieId}`
  }

  @Post()
  create(@Body() movieData) {
    return movieData
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete with the id: ${movieId}`
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData
    }
  }
} 
