import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  txt: string = '';
  checkbox: boolean = false;
  isAddTask: boolean;
  subscrition: Subscription;

  constructor(private uiService: UiService) {
    this.subscrition = this.uiService.onToggle()
      .subscribe(val => this.isAddTask = val)
  }

  ngOnInit(): void { }

  onSubmit() {
    const task = {
      txt: this.txt,
      createdAt: new Date(Date.now()).toLocaleString('IL-he'),
      reminder: this.checkbox,
    }

    this.onAddTask.emit(task)
    this.resetForm()
  }

  resetForm() {
    this.txt = ''
    this.checkbox = false
  }
}