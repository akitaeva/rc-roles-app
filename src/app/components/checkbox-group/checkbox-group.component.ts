import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CheckboxItem, UserComponent } from '../user/user.component';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options = Array<CheckboxItem>();
  @Output() toggle = new EventEmitter<any[]>();

  selectedValues:any;

  constructor() { }

  ngOnInit() {
    if(this.selectedValues) {
      this.selectedValues.forEach(value => {
      const element = this.options.find(res => res.value === value);
      if (element) {
        element.checked = true;
      }
     });
    }
   
  }

  getUser(currentUser) {
    console.log("what is our CURRENT USeR ", currentUser)
  }

  onToggle() {
    const checkedOptions = this.options.filter(res => res.checked);
    this.selectedValues = checkedOptions.map(res => res.value);
    console.log("what options are checked: ", checkedOptions)
    console.log("what is picked: ", this.selectedValues)
    this.toggle.emit(checkedOptions.map(res => res.value));
   }



}
