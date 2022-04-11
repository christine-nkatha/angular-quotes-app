import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quote[] = [
    new Quote (1,'mullen','technology','Technology is best when it brings people together.','matt mullenweg',new Date(2022,6,3),0,0), 
    new Quote (2,'albert','technology…','technology…it has become appallingly obvious that our technology has exceeded our humanity.','Max Frisch',new Date(2022,7,14),0,0),
    new Quote (3,'clive','technology','its is only when they go wrong that machines remind you how powerful they are .','clive james',new Date(2022,6,3),0,0),
    new Quote (4,'lloyd','technology','if it keeps up,man will atrophy all his limbs but the push-button finger .','frank lloyd',new Date(2022,7,7),0,0),
    new Quote (5,'steve','technology','its not a faith in technology its faith in people.','steve jobs',new Date(2022,7,17),0,0),
    new Quote (6,'lee','technology','the web as i envisage it,we have not seen it yet the future is still so much bigger than the past.','Alice Kahn',new Date(2022,7,15),0,0)
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
      
    }
  
 
  displayInfo(index:any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  
  ngOnInit() {
  }
}

