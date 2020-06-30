import { Component, OnInit } from '@angular/core';
import { Audit } from 'src/app/core/data/models/audit.model';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { AuditState } from 'src/app/core/ngxs/audit.state';
import { FacCrit } from 'src/app/core/data/models/faccrit.model';
import { AppRouterState } from 'src/app/core/ngxs/app-router.state';
import { Interview } from 'src/app/core/data/models/interview.model';
import { InterviewState } from 'src/app/core/ngxs/interview.state';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss'],
})
export class InterviewListComponent implements OnInit {
  @Select(AuditState.facCrits) facCrits$: Observable<FacCrit[]>;
  @Select(AppRouterState.auditId) auditId$: Observable<string>;

  interviews$: Observable<Interview[]>;
  audit$: Observable<Audit>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.auditId$.subscribe(id => {
      this.audit$ = this.store.select(AuditState.audit(id));
      this.interviews$ = this.store.select(InterviewState.interviewsByAuditId(id));
    });
  }
}
