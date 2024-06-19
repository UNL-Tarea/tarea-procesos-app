import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders the task manager header', () => {
    render(<HomePage />);
    expect(screen.getByText('Gestor de tareas')).toBeInTheDocument();
  });

  it('renders the create task form', () => {
    render(<HomePage />);
    expect(screen.getByText('Crear una tarea')).toBeInTheDocument();
    expect(screen.getByLabelText('Título')).toBeInTheDocument();
    expect(screen.getByLabelText('Descripción')).toBeInTheDocument();
    expect(screen.getByText('Selecciona una opcion')).toBeInTheDocument();
    expect(screen.getByText('Selecciona la fecha')).toBeInTheDocument();
    expect(screen.getByText('Crear tarea')).toBeInTheDocument();
  });

  it('renders the tasks section', () => {
    render(<HomePage />);
    expect(screen.getByText('Tareas')).toBeInTheDocument();
    expect(screen.getByText('Finish project proposal')).toBeInTheDocument();
    expect(
      screen.getByText('Write up the project proposal for the client.')
    ).toBeInTheDocument();
    expect(screen.getByText('Selecciona el estado')).toBeInTheDocument();
    expect(screen.getByText('Fecha: 2024-06-30')).toBeInTheDocument();
  });

  it('renders the delete button in tasks', () => {
    render(<HomePage />);
    expect(screen.getAllByRole('button', { name: /TrashIcon/i })).toHaveLength(
      1
    );
  });
});
