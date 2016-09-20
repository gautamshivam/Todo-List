/**
 * Created by shivam gautam on 18-09-2016.
 */
import { Component } from '@angular/core';

@Component({
    selector : 'todo-list',
    templateUrl : './app/todo-list.html',
    styleUrls : ['./css/todo-list.css']
})
export class TodoListComponent {
    public  todoListItems = [
        {task:"dinner",date:"2016-09-21",time:"09:45"}
    ];
    public  selectedItem;

    public date = "";
    public time = "";

    onItemClicked(item){
        this.selectedItem = item;
    }
    onAddItem(item,date,time){
        if(item.value != ""){
            this.todoListItems.push({task:item.value , date:date.toString() , time:time.toString()});
            item.value = null;
        }
    }
    enterkeyPressed(event,item,date,time){
        if(event.keyCode === 13 && item.value){
            this.todoListItems.push({task:item.value , date:date.toString() , time:time.toString()});
            item.value = null;
        }
    }
    onUpdateItem(item,date,time){
        if(item.value != ""){
            this.todoListItems[this.todoListItems.indexOf(this.selectedItem)].task= item.value;
            this.todoListItems[this.todoListItems.indexOf(this.selectedItem)].date= date.toString();
            this.todoListItems[this.todoListItems.indexOf(this.selectedItem)].time= time.toString();
            item.value = null;
        }

    }
    onDeleteItem(){
        if(this.selectedItem)
        this.todoListItems.splice(this.todoListItems.indexOf(this.selectedItem),1);
    }
}