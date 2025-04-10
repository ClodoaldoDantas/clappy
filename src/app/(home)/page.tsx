import { RoomCard } from './_components/room-card'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { NewRoomForm } from './_components/new-room-form'

export default function Home() {
	return (
		<>
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-bold text-violet-600">Salas Criadas</h2>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="default" className="text-base">
							Adicionar Sala
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[500px] font-sans">
						<DialogHeader>
							<DialogTitle className="font-bold">
								Criar uma Nova Sala
							</DialogTitle>

							<DialogDescription>
								Crie um espaço para compartilhar reconhecimento
							</DialogDescription>
						</DialogHeader>

						<NewRoomForm />
					</DialogContent>
				</Dialog>
			</div>

			<div className="grid grid-cols-3 gap-4">
				<RoomCard />
				<RoomCard />
				<RoomCard />
			</div>
		</>
	)
}
