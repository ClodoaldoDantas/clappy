import { UserRound } from 'lucide-react'

export function RoomCard() {
	return (
		<div className="p-4 border border-zinc-200 shadow-xs rounded">
			<div className="space-y-1">
				<h3 className="font-bold text-zinc-900 text-lg">
					Equipe de Desenvolvimento
				</h3>
				<p className="text-zinc-600">
					Sala para reconhecimento da equipe de desenvolvimento
				</p>
			</div>

			<div className="border-t border-zinc-200 pt-4 mt-4">
				<div className="flex items-center justify-between text-zinc-600">
					<div className="flex items-center gap-1.5">
						<UserRound className="size-4" />
						<span className="text-sm font-medium">8 membros</span>
					</div>

					<span className="text-sm">Criada em 4 de abr. de 2025</span>
				</div>
			</div>
		</div>
	)
}
