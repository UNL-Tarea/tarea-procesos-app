import { FormTask } from '@/types/form';

async function getData() {
  try {
    const res = await fetch('https://tarea-procesos-api.onrender.com/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded\r\n',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function getTasks() {
  const data = await getData();
  return data;
}

export async function postTasks(data: FormTask) {
  try {
    const res = await fetch('https://tarea-procesos-api.onrender.com/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded\r\n',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
}
