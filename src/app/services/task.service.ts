import { Injectable } from '@angular/core';
import { Task } from '../models/task.model'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = []
  private nextId = 1

  getTasks(): Task[] {
    return this.tasks
  }
  addTask(title: string, description: string): void {
    this.tasks.push({ id: this.nextId++, title, description, done: false })
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id)
    if (index !== -1) {
      this.tasks[index] = task
    }
  }

  constructor() {}
}
