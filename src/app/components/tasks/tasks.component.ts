import { Component, OnInit } from '@angular/core';

import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  removeTask(task: Task): void {
    this.taskService.removeTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => task.id !== t.id))
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe()
  }

  addTask(task: Task): void {
    this.taskService.addTask(task)
      .subscribe(task => this.tasks.unshift(task))
  }
}