import { Injectable } from '@angular/core';
import { ContactPerson } from '../data/models/contact-person.model';
import { BehaviorSubject } from 'rxjs';
import { ContactPersonService } from '../http/contact-person.service';

@Injectable({
  providedIn: 'root',
})
export class ContactPersonStore {
  private _contactPersons$ = new BehaviorSubject<ContactPerson[]>([]);

  get contactPersons$() {
    return this._contactPersons$.asObservable();
  }

  constructor(private contactPersonService: ContactPersonService) {}

  loadContactPersons(): void {
    this.contactPersonService
      .getContactPersons()
      .subscribe(contactPersons => this._contactPersons$.next(contactPersons));
  }

  addContactPerson(contactPerson: ContactPerson): void {
    this.contactPersonService.postContactPerson(contactPerson).subscribe(contactPerson => {
      const contactPersons = this._contactPersons$.value;
      this._contactPersons$.next([...contactPersons, contactPerson]);
    });
  }

  updateContactPerson(contactPerson: ContactPerson): void {
    this.contactPersonService.putContactPerson(contactPerson).subscribe(contactPerson => {
      const contactPersons = this._contactPersons$.value;
      const indexOfContactPerson = contactPersons.findIndex(cp => cp.id === contactPerson.id);

      this._contactPersons$.next([
        ...contactPersons.slice(0, indexOfContactPerson),
        contactPerson,
        ...contactPersons.slice(indexOfContactPerson + 1),
      ]);
    });
  }
}