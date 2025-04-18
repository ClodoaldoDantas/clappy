import { ShareButton } from '@/components/share-button'
import { formatDate } from '@/utils/date'

type RoomCardProps = {
	data: {
		sender: string
		recipient: string
		message: string
		createdAt: Date
	}
}

export function KudoCardItem({ data }: RoomCardProps) {
	const createdAtFormatted = formatDate(data.createdAt)
	const shareMessage = `Kudo Card de ${data.sender} para ${data.recipient}: ${data.message}`

	return (
		<div className="p-4 border border-zinc-200 shadow-xs rounded">
			<div className="space-y-1">
				<div className="flex items-center justify-between mb-5">
					<div className="flex flex-col">
						<small className="font-medium text-zinc-600">De</small>
						<span className="font-bold text-base text-zinc-900">
							{data.sender}
						</span>
					</div>

					<div className="flex flex-col">
						<small className="font-medium text-zinc-600">Para</small>
						<span className="font-bold text-base text-zinc-900">
							{data.recipient}
						</span>
					</div>
				</div>

				<p className="text-zinc-600 min-h-12">{data.message}</p>
			</div>

			<div className="border-t border-zinc-200 pt-4 mt-4">
				<div className="flex items-center justify-between text-zinc-600">
					<span className="text-sm">{createdAtFormatted}</span>
					<ShareButton value={shareMessage} />
				</div>
			</div>
		</div>
	)
}
