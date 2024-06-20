import { FormTask } from '@/types/form';

export async function getTasks() {
  try {
    const res = await fetch('https://tarea-procesos-api.onrender.com/get', {
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

export async function postTasks(data: FormTask) {
  try {
    const res = await fetch('https://tarea-procesos-api.onrender.com/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded\r\n',
      },
      body: JSON.stringify({
        id: '1',
        title: 'Tarea 1',
        description: 'Descripción de la tarea 1',
        status: 'incomplete',
        dateTask: '2023-05-01',
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to send data');
    }
  } catch (error) {
    throw error;
  }
}
