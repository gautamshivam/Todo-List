"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by shivam gautam on 18-09-2016.
 */
var core_1 = require('@angular/core');
var task = (function () {
    function task() {
    }
    return task;
}());
exports.task = task;
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.todoListItems = ["dinner", "sleep", "study"];
    }
    TodoListComponent.prototype.onItemClicked = function (item) {
        this.selectedItem = item;
    };
    TodoListComponent.prototype.onAddItem = function (item) {
        if (item.value != "")
            this.todoListItems.push(item.value);
        item.value = null;
    };
    TodoListComponent.prototype.enterkeyPressed = function (event, item) {
        if (event.keyCode === 13 && item.value) {
            this.todoListItems.push(item.value);
            item.value = null;
        }
    };
    TodoListComponent.prototype.onUpdateItem = function (item) {
        if (item.value != "")
            this.todoListItems[this.todoListItems.indexOf(this.selectedItem)] = item.value;
        item.value = null;
    };
    TodoListComponent.prototype.onDeleteItem = function () {
        if (this.selectedItem)
            this.todoListItems.splice(this.todoListItems.indexOf(this.selectedItem), 1);
    };
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: ['./app/todo-list.html'],
            styleUrls: ['./css/todo-list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map