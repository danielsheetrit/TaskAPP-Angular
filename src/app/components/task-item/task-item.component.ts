import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faBell } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})

export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onRemoveTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void { }

  onRemove(task: Task) {
    this.onRemoveTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }
}
