import { RoomCard } from './_components/room-card'

export default function Home() {
	return (
		<>
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-bold text-violet-600">Salas Criadas</h2>
			</div>

			<div className="grid grid-cols-3 gap-4">
				<RoomCard />
				<RoomCard />
				<RoomCard />
			</div>
		</>
	)
}
