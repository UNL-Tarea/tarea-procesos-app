import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import TrashIcon from '@/app/components/Icons/TrashIcon';

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
}

const TaskCard = ({ title, description, dueDate }: TaskCardProps) => {
  return (
    <Card className="bg-card p-4 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="incomplete">Incompleta</SelectItem>
              <SelectItem value="complete">Completa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground mt-5">
          Fecha: {dueDate}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="ml-auto">
          <TrashIcon className="h-5 w-5" color="red" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
