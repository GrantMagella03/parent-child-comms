import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoNothingService {
  about: string = "About doNothingService"
  constructor() { }
}
