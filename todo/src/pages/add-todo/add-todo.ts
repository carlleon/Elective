import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
	title: string;
	description: string;

  constructor(public navCtrl: NavController, public modalView: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }

  saveTodo () {
  	let newTodo = {
  	title: this.title,
  	description: this.description  	
  	}
  	this.modalView.dismiss(newTodo);
  }

 	close(){
 		this.modalView.dismiss();
 	}

}
