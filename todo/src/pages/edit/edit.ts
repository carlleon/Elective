import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

	title: string;
	description: string;

  constructor(public navCtrl: NavController, public modalView: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  editTodo() {
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
