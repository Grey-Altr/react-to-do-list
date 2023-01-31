import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createListItem(id, description) {
  const response = await client.from('todos').insert([{ id, description }]).single();

  return checkError(response);
}

export async function toggleListItem({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}
