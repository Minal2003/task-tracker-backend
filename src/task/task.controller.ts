import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly tasksService: TaskService) {}

    @Post()
    create(@Body('title') title: string) {
      return this.tasksService.create(title);
    }
  
    @Get()
    findAll() {
      return this.tasksService.findAll();
    }

    @Patch(':id')
toggle(@Param('id') id: string) {
  console.log('PATCH request received for id:', id);
  return this.tasksService.toggle(id);
}

  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.tasksService.delete(id);
    }
}
