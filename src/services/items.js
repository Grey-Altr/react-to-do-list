import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('tasks').select();
  return checkError(response);
}

export async function createListItem(id, description) {
  const response = await client.from('tasks').insert([{ id, description }]).single();

  return checkError(response);
}
