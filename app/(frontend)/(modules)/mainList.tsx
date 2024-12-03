import AccordionUI from "@/components/ui/accordion";
import { ICycle } from "@/app/(backend)/api/(modules)/cycles/types";
import { IModule } from "@/app/(backend)/api/(modules)/modules/types";
import { IStep } from "@/app/(backend)/api/(modules)/steps/types";


interface IFullModule extends IModule {
	steps: IStep[] | null
}
interface IFullCycle extends ICycle{
	modules: IFullModule[] | null,
}

export default function CyclesList({data}:{data:IFullCycle[] | null}) {
	return (
		<>
			<div className="w-1/5">
				<AccordionUI title="Cycles">
					{data?.map((i)=> (
						<div key={i.id} className="pl-4">
							<AccordionUI title={i.name}>
								{i?.modules?.map((ii)=> (
									<div key={ii.id} className="pl-4">
										<AccordionUI title={ii.name}>
											{ii?.steps?.map((iii)=> <li key={iii.id} className="pl-4">{iii.name}</li>)}
										</AccordionUI>
									</div>
								))}
							</AccordionUI>
						</div>

						))}
				</AccordionUI>
			</div>
		</>
		
	)
}