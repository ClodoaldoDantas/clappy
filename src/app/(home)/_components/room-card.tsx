import { formatDate } from '@/utils/date'
import { UserRound } from 'lucide-react'
import Link from 'next/link'

type RoomCardProps = {
	data: {
		id: string
		name: string
		description: string
		createdAt: Date
	}
}

export function RoomCard({ data }: RoomCardProps) {
	const createdAtFormatted = formatDate(data.createdAt)

	return (
		<Link href={`/rooms/${data.id}`}>
			<div className="p-4 border border-zinc-200 shadow-xs rounded transition hover:border-violet-600 hover:-translate-y-1">
				<div className="space-y-1">
					<h2 className="font-bold text-zinc-900 text-lg">{data.name}</h2>
					<p className="text-zinc-600 min-h-12">{data.description}</p>
				</div>

				<div className="border-t border-zinc-200 pt-4 mt-4">
					<div className="flex items-center justify-between text-zinc-600">
						<div className="flex items-center gap-1.5">
							<UserRound className="size-4" />
							<span className="text-sm font-medium">0 membros</span>
						</div>

						<span className="text-sm">{createdAtFormatted}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
