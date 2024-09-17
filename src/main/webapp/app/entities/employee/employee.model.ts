export interface IEmployee {
  id: number;
  name?: string | null;
  salary?: number | null;
  address?: string | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
