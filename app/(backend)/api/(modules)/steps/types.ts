export interface IStep {
    id: number;
    name: string;
    step_module:number
    step_user:number
    status:number;
    desc:string;
    created_at?:string;
}
