import { Audit, AuditStatus } from '../data/models/audit.model';
import { State, Selector, Action, StateContext, createSelector } from '@ngxs/store';
import { patch, updateItem, removeItem, append } from '@ngxs/store/operators';
import { Injectable } from '@angular/core';
import { AddAudit, DeleteAudit, UpdateAudit } from './actions/audit.actions';
import * as shortid from 'shortid';
import { FacCrit } from '../data/models/faccrit.model';
import { FACCRITS } from '../data/examples/fac-crits';
import { AUDITS } from '../data/examples/audits';

export interface AuditStateModel {
  audits: Audit[];
  facCrits: FacCrit[];
}

/**
 * State for managing the audits and facCrits of the application.
 *
 * Has: Action handlers to read, write, update and delete an audit.
 * Static and dynamic selectors to select audits and faccrits.
 */
@State<AuditStateModel>({
  name: 'audit',
  defaults: {
    audits: AUDITS,
    facCrits: FACCRITS,
  },
})
@Injectable()
export class AuditState {
  @Selector()
  static audits(state: AuditStateModel) {
    return state.audits;
  }

  @Selector()
  static facCrits(state: AuditStateModel) {
    return state.facCrits;
  }

  static audit(id: string) {
    return createSelector([AuditState], (state: AuditStateModel) => {
      return state.audits.find(x => x.id === id);
    });
  }

  static auditByStatus(...statuses: AuditStatus[]) {
    return createSelector([AuditState], (state: AuditStateModel) => {
      return state.audits.filter(x => statuses.includes(x.status));
    });
  }

  static facCrit(id: string) {
    return createSelector([AuditState], (state: AuditStateModel) => {
      return state.facCrits.find(x => x.id === id);
    });
  }

  static criteriaByFactorId(id: string) {
    return createSelector([AuditState], (state: AuditStateModel) => {
      return state.facCrits.filter(x => x.referenceId === id);
    });
  }

  @Action(AddAudit)
  addAudit({ setState }: StateContext<AuditStateModel>, { audit }: AddAudit) {
    setState(
      patch({
        audits: append<Audit>([{ ...audit, id: shortid.generate() }]),
      }),
    );
  }

  @Action(UpdateAudit)
  updateAudit(ctx: StateContext<AuditStateModel>, { id, audit }: UpdateAudit) {
    const a = ctx.getState().audits.find(x => x.id == id);
    ctx.setState(
      patch({
        audits: updateItem<Audit>(x => x.id === id, { ...a, ...audit }),
      }),
    );
  }

  @Action(DeleteAudit)
  deleteAudit({ setState }: StateContext<AuditStateModel>, { id }: DeleteAudit) {
    setState(
      patch({
        audits: removeItem<Audit>(x => x.id === id),
      }),
    );
  }
}
