'use client';

import { useQuery } from '@tanstack/react-query';

import TaskForm from '@/app/components/TaskForm/TaskForm';
// import TaskCard from '@/app/components/TaskCard/TaskCard';

import { getTasks } from '@/lib/api';

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => await getTasks(),
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gestor de tareas</h1>
      </div>

      <TaskForm />

      <div>
        <h2 className="text-xl font-bold mb-4">Tareas</h2>
        {!data ? (
          <p className="text-center">No hay tareas pendientes</p>
        ) : (
          <p>{JSON.stringify(data)}</p>
        )}
        {isLoading && <p className="text-center">Cargando...</p>}
        {isError && <p className="text-center">Lo siento, hubo un error</p>}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TaskCard
            title="Finish project proposal"
            description="Write up the project proposal for the client."
            dueDate="2024-06-30"
          />
        </div> */}
      </div>
    </div>
  );
}
