import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.component.html',
  styleUrls: ['./location-setup.component.scss']
})
export class LocationSetupComponent {
  station: any=''
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public storageService: StorageService, private router: Router,private webSocket:WebSocketService) {
    this.myForm = this.formBuilder.group({
      inputValue: [''] // Initial value can be provided here
    });
  }

  setValue() {
    const formValue = this.myForm.value;
    this.storageService.setStationID(formValue.inputValue)
    this.webSocket.connect()
    this.router.navigate(['start-game'])
    // You can use formValue.inputValue in your component logic or send it to a service, as needed
  }
}
