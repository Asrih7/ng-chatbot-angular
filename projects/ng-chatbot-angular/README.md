# NgChatbotAngular


`ng-chatbot-angular` is an Angular component for creating chat-box.It can be used to simulate chatbot.



## Installation

To use ng-chatbot-angular in your project install it via [npm](https://www.npmjs.com/package/ng-chatbot-angular):

```bash
npm i ng-chatbot-angular
```

## Usage example

AppModule.ts
```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgChatbotAngularModule } from "ng-chatbot-angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgChatbotAngularModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
app.component.html
```
<ng-chatbot-angular
  [chatConfig]="config"
  (onMessageInput)="onMessageInput($event)"
  [serverResponse]="responses[responseIndex]">
</ng-chatbot-angular>
```
app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  responses = [
    'Hi! You can contact us via contactchatbot@chat.com',
    'Sure! Our customer service team is available 24/7.',
    'Thank you for contacting us. We will get back to you shortly.'
  ];
  responseIndex = -1;
  loading = false; 
  config = {
    title: 'Chat Bot',
    subTitle: 'Welcome!',
  };
  
  setData(message: string) {
    this.loading = true;
    setTimeout(() => {

      this.responseIndex = (this.responseIndex + 1) % this.responses.length;
      this.loading = false; 
    }, 1000); 
  }
  
  onMessageInput(message: string) {
    this.setData(message);
  }
}

```






