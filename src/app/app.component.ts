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
}
