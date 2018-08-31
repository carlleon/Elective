import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { DescriptionPage } from '../description/description';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
	public items = [
	{title: "First Test", description: "What am I?"},
	{title: "Dota 2", description: "Lol Play Pubg"},
	{title: "Dummy", description: "John Doew"}
	];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
  }
 
 	addItem(){
 
    let addModal = this.modalCtrl.create(AddTodoPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  edit(index){
 
    let addModal = this.modalCtrl.create(EditPage);
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.editItem(item,index);
          }
 
    });
 
    addModal.present();
 
  }

  saveItem(item){
  	console.log(item)
  	this.items.push(item)
  }
 
  viewItem(item){
 		this.navCtrl.push(DescriptionPage, {
    item: item
  	});
  }

  editItem(item,index){
  	this.items[index] = item;
  }

  deleteItem(index){
  	console.log(index);
  	this.items.splice(index,1);
  }

}
