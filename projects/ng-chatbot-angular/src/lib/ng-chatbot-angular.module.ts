import { NgModule } from '@angular/core';
import { NgChatbotAngularComponent } from './ng-chatbot-angular.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [NgChatbotAngularComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [NgChatbotAngularComponent]
})
export class NgChatbotAngularModule { }
