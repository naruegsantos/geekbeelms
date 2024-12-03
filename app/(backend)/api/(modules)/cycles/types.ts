import { IModule } from "../modules/types";
import { IStep } from "../steps/types";

export interface ICycle {
    id: number;
    name: string;
    created_at?:string;
}

export interface IFullModule extends IModule {
	steps: IStep[] | null
}
export interface IFullCycle extends ICycle{
	modules: IFullModule[] | null,
}