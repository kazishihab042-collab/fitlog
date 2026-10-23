export interface IProduct {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
export interface IproductContext {
  planlist: IProduct[];
  savedlist: IProduct[];
  setPlanlist: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setSavedlist: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
