import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from './nebular/nebular.module';
import { AddAuditDialogComponent } from './components/dialogs/add-audit-dialog/add-audit-dialog.component';
import { EditAuditDialogComponent } from './components/dialogs/edit-audit-dialog/edit-audit-dialog.component';
import { ActionListenerDirective } from './directives/action-listener.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmDiscardDialogComponent } from './components/dialogs/confirm-discard-dialog/confirm-discard-dialog.component';
import { SortAuditPipe } from './pipes/sort-audit.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddContactPersonDialogComponent } from './components/dialogs/add-contact-person-dialog/add-contact-person-dialog.component';
import { ContactPersonFormComponent } from './components/forms/contact-person-form/contact-person-form.component';
import { EditContactPersonDialogComponent } from './components/dialogs/edit-contact-person-dialog/edit-contact-person-dialog.component';
import { FactorsPipe } from './pipes/factors.pipe';
import { CriteriasPipe } from './pipes/criterias.pipe';
import { AuditFormComponent } from './components/forms/audit-form/audit-form.component';
import { FactorByIdPipe } from './pipes/factorById.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarInterviewListComponent } from './components/sidebar/sidebar-interview-list/sidebar-interview-list.component';
import { CriteriaByFactorPipe } from './pipes/facCritByFactor.pipe';
import { InterviewByFacCritPipe } from './pipes/interviewByFacCrit.pipe';
import { SidebarInterviewComponent } from './components/sidebar/sidebar-interview/sidebar-interview.component';

@NgModule({
  declarations: [
    CriteriasPipe,
    FactorsPipe,
    CriteriaByFactorPipe,
    InterviewByFacCritPipe,
    SortAuditPipe,
    FactorByIdPipe,
    AddAuditDialogComponent,
    EditAuditDialogComponent,
    ActionListenerDirective,
    SidebarComponent,
    AddContactPersonDialogComponent,
    ContactPersonFormComponent,
    EditContactPersonDialogComponent,
    SidebarInterviewListComponent,
    SidebarInterviewComponent,
    AuditFormComponent,
    NotFoundComponent,
    ConfirmDiscardDialogComponent,
  ],
  imports: [CommonModule, RouterModule, NebularModule, ReactiveFormsModule],
  exports: [
    InterviewByFacCritPipe,
    CriteriaByFactorPipe,
    FactorsPipe,
    CriteriasPipe,
    FactorByIdPipe,
    SortAuditPipe,
    NebularModule,
    AddAuditDialogComponent,
    EditAuditDialogComponent,
    AddContactPersonDialogComponent,
    ActionListenerDirective,
    AuditFormComponent,
    SidebarComponent,
    NotFoundComponent,
    ContactPersonFormComponent,
    ConfirmDiscardDialogComponent,
    EditContactPersonDialogComponent,
  ],

  providers: [FactorsPipe, CriteriaByFactorPipe],
})
export class SharedModule {}
