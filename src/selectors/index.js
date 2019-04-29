import { createSelector } from 'reselect';

export const getClients = state => state.clientsStore.clients;
export const getClientSelectId = state => state.clientsStore.clientSelectId;

export const getSelectedClient = createSelector(
  [getClients, getClientSelectId],
  (clients, id) => {
    const client = clients.filter(item => item.id === id);
    if (client && client.length === 1) {
      return client[0];
    }
    return null;
  },
);