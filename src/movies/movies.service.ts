import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = []

  getAll(): Movie[] {
    return this.movies
  }

  getOne(id: string): Movie {
    const movie = this.movies.find(movie => movie.id === +id)
    if (!movie) {
      throw new NotFoundException(`Movie not found id = ${id}`)
    }
    return movie
  }

  deleteOne(id: string) {
    console.log('test')
    this.getOne(id)
    this.movies = this.movies.filter(movie => movie.id !== +id)
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }

  update(id: string, updateData) {
    const movie = this.getOne(id)
    this.deleteOne(id)
    this.movies.push({ ...movie, ...updateData })
  }
}
