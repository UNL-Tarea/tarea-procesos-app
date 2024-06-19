import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import CalendarDaysIcon from '@/app/components/Icons/CalendarDaysIcon';

const TaskForm = () => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Crear una tarea</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input id="title" placeholder="Ingresa un titulo" />
        </div>
        <div>
          <Label htmlFor="description">Descripción</Label>
          <Textarea id="description" placeholder="Ingresa una descripción" />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opcion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="incomplete">Incompleta</SelectItem>
              <SelectItem value="complete">Completado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="dueDate">Fecha</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                Selecciona la fecha
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="col-span-2">
          <Button type="submit" className="w-full">
            Crear tarea
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
