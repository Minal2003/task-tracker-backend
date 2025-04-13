import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/schema/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    create(title: string) {
      const newTask = new this.taskModel({ title });
      return newTask.save();
    }
  
    findAll() {
      return this.taskModel.find().exec();
    }
  
    async toggle(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id);
        if (!task) throw new Error('Task not found');
      
        task.completed = !task.completed; 
        return task.save(); 
      }
      
  
    delete(id: string) {
      return this.taskModel.findByIdAndDelete(id);
    }
}
