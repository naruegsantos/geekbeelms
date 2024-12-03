import AccordionUI from "@/components/ui/accordion";
import { ICycle } from "../../../(backend)/api/(modules)/cycles/types";

export default function CyclesList({data}:{data:ICycle[] | null}) {
	return (
		<>
			
			<AccordionUI title="Cycles">
				{data?.map((i)=> (
					<AccordionUI key={i.id} title={i.name}>
						<li>{i.name}</li>
					</AccordionUI>
					))}
			</AccordionUI>
		</>
	)
}