/**
 * Created by shivam gautam on 18-09-2016.
 */
import { Component } from '@angular/core';
export class task{
    detail : string;
}
@Component({
    selector : 'todo-list',
    templateUrl : ['./app/todo-list.html'],
    styleUrls : ['./css/todo-list.css']
})
export class TodoListComponent {
    public  todoListItems = ["dinner","sleep","study"];
    public  selectedItem;
    onItemClicked(item){
        this.selectedItem = item;
    }
    onAddItem(item){
        if(item.value != "")
        this.todoListItems.push(item.value);
        item.value = null;
    }
    enterkeyPressed(event,item){
        if(event.keyCode === 13 && item.value){
            this.todoListItems.push(item.value);
            item.value = null;
        }
    }
    onUpdateItem(item){
        if(item.value != "")
            this.todoListItems[this.todoListItems.indexOf(this.selectedItem)]= item.value;
            item.value = null;
    }
    onDeleteItem(){
        if(this.selectedItem)
        this.todoListItems.splice(this.todoListItems.indexOf(this.selectedItem),1);
    }
}