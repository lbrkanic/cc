import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { EncoderService } from '../encoder.service';

@Component({
  selector: 'dh-encoder-page',
  templateUrl: './encoder-page.component.html',
  styleUrls: ['./encoder-page.component.scss']
})
export class EncoderPageComponent {

  input: FormControl;
  result: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private encoderService: EncoderService
  ) {
    this.input = new FormControl();
    this.result = '';
  }

  encode(): void {
    this.encoderService.encode(this.input.value).subscribe((result) => {
      this.result = result;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
