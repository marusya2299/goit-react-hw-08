import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectAllContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;