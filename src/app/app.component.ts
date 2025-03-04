import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createActor } from '../declarations/HelloWorld-Angular-Motoko-backend';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';

  public newGreet: string = ""

  private motokoActor = createActor(environment.MOTOKO_CANISTER_BACKEND_ID, {
    agentOptions: { host: "http://localhost:4943" }
  });

  async greet(newName: string) {
    this.newGreet = await this.motokoActor.greet(newName)
    
  }
}


