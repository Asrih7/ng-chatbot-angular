import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ChatConfig } from './chat-config';
import { Message } from './message'; // Import the updated Message interface

@Component({
  selector: 'ng-chatbot-angular',
  templateUrl: './ng-chatbot-angular.component.html',
  styleUrls: ['./ng-chatbot-angular.component.css']
})
export class NgChatbotAngularComponent implements OnInit {
  @ViewChild('autoScroll', { static: true }) private myScrollContainer!: ElementRef;
  @Input() chatConfig: ChatConfig | undefined;
  @Input() set serverResponse(value: string) {
    this.addServerResponse(value);
  }
  @Output() onMessageInput: EventEmitter<any> = new EventEmitter<any>();

  messages: Message[] = [];
  userMessage = '';
  isModalActive = false;
  isBotActive = false;
  isButtonVisible = true; 

  ngOnInit(): void {
    this.messages = [];
  }

  showDialog() {
    this.isModalActive = true;
    this.isButtonVisible = false; 
    let modal_t = document.getElementById('chat_modal');
    modal_t?.classList.remove('hidden-chat');
    modal_t?.classList.add('show-chat');
  }

  closeDialog() {
    this.isModalActive = false;
    this.isButtonVisible = true; 
    let modal_t = document.getElementById('chat_modal');
    modal_t?.classList.remove('show-chat');
    modal_t?.classList.add('hidden-chat');
  }

  pushData() {
    if (this.userMessage.trim() !== '') {
      this.onMessage(this.userMessage);
      this.messages.push({ type: 'user', message: this.userMessage });
      this.userMessage = '';
      this.isBotActive = true;
      this.scrollToBottom();
    }
  }

  addServerResponse(serverResponse: string) {
    const newMessage: Message = { type: 'bot', message: serverResponse, loading: true }; 
    this.messages.push(newMessage);
    this.isBotActive = false;
    this.scrollToBottom();

    setTimeout(() => {
      newMessage.loading = false; 
      this.scrollToBottom(); 
    }, 1000); 
  }

  scrollToBottom() {
    if (this.myScrollContainer) {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
  }
  

  public onMessage(date: any): void {
    this.onMessageInput.emit(date.trim());
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}