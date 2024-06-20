'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { randomUUID } from 'crypto';

import { Form } from '@/components/ui/form';
import { FormTask } from '@/types/form';

import TaskFormView from './TaskFormView';
import { FormSchema, FormType } from './schema';
import { postTasks } from '@/lib/api';

const TaskForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      dateTask: new Date(),
    },
  });

  const { handleSubmit, resetField } = form;

  function onSubmit(data: FormType) {
    const dataReceived: FormTask = {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      status: 'incomplete',
      dateTask: data.dateTask,
    };

    console.log(dataReceived);
    // lógica de mutation

    resetField('title');
    resetField('description');
    resetField('dateTask');
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TaskFormView />
        </form>
      </Form>
    </FormProvider>
  );
};

export default TaskForm;
