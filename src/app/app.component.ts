import { Component , OnInit} from '@angular/core';
import {from} from 'rxjs';
import {SupabaseService} from './services/supabase.service';
import {ITest} from './models/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test-supabase';

  tests:ITest[] = [];

  constructor(private supabase:SupabaseService) {

  }

  async ngOnInit() {
    this.tests = await this.getTests();

    console.log('TESTS',this.tests)
  }
 
  async getTests():Promise<ITest[]> {
    let {data: entries, error} = await this.supabase.tests; 
    return entries as ITest[];
  }

  async signIn() {
    let {user} = await this.supabase.signIn('vnabet@outlook.com','tototo');

    console.log('USER', user)
  }

  async signUp() {
    let response = await this.supabase.signUp('vnabet@outlook.com', 'tototo');

    console.log('USER', response)
  }

  getSession() {
    let session = this.supabase.session;

    console.log('SESSION', session)
  }

  async signOut() {
    let result = await this.supabase.signOut();

    console.log('SIGNOUT', result)
  }

  async insert() {
    let {data, error} = await this.supabase.insert();

    console.log('INSERT', data, error)
  }
}
