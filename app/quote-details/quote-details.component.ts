import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
   @Input() quoty=new Quote(1,"qoute1","qoute title","quote body","christine",new Date(),100,10)
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}