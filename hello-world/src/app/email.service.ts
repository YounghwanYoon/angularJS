import { Injectable } from '@angular/core';

//Injectable means angular should be able to inject dependencies of this class into its constructor  
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
