import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from './../animations';
import { Component } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes, animation, useAnimation, query, animateChild, group, stagger } from '@angular/animations';


@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [ 
    trigger('todosAnimation',[
      transition(':enter',[
        group([
          query('h1',[
            style({transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@toDoAnimation',
            stagger('200ms', animateChild())
          )
        ])
      ])
    ]),

    trigger('toDoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1000ms'
          }
        })
      ]),
      transition(':leave',[
        style({background: 'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event){
    console.log($event);
  }

  animationDone($event){
    console.log($event);
  }
}
