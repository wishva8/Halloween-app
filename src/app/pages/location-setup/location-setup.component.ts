import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.component.html',
  styleUrls: ['./location-setup.component.scss'],
})
export class LocationSetupComponent implements OnInit {
  station: any = '';
  clientForm: FormGroup;
  operatorForm: FormGroup;

  selectedOption: any = 'operator';

  constructor(
    private formBuilder: FormBuilder,
    public storageService: StorageService,
    private router: Router,
    private webSocket: WebSocketService
  ) {
    this.clientForm = this.formBuilder.group({
      inputValue: [''], // Initial value can be provided here
    });
    this.operatorForm = this.formBuilder.group({
      inputValue: [''], // Initial value can be provided here
    });
  }

  ngOnInit(): void {
    window.localStorage.clear();
  }

  setClient() {
    const formValue = this.clientForm.value;
    this.storageService.setStationID(formValue.inputValue);
    this.webSocket.connect();
    if (this.clientForm.value.inputValue == 0) {
      this.router.navigate(['symbols-display-page']);
    } else {
      this.router.navigate(['default-client-screen']);
    }

    // You can use formValue.inputValue in your component logic or send it to a service, as needed
  }

  setOperator() {
    const formValue = this.operatorForm.value;
    this.storageService.setLocationGroupID(formValue.inputValue);
    this.webSocket.connect();
    if (formValue.inputValue == 0) {
      this.router.navigate(['start-game']);
    }
    if (formValue.inputValue == 1) {
      this.router.navigate(['select-symbols-page']);
    }
  }
}
