import { IModule } from "@/app/(backend)/api/(modules)/modules/types";

export default function CyclesList({data}:{data:IModule[] | null}) {
	return (
		<ul>
			{data?.map((i) => <li key={i.id}>{i.name}</li>)}
		</ul>
	)
}