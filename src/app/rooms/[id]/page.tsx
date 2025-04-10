import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { formatDate } from '@/utils/date'
import { AlertCircle, Award, CalendarFoldIcon, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KudoCardItem } from './_components/kudo-card-item'
import { NewKudoForm } from './_components/new-kudo-form'
import { getRoom } from './actions'

type RoomPageProps = {
	params: Promise<{ id: string }>
}

export default async function RoomPage({ params }: RoomPageProps) {
	const { id } = await params
	const room = await getRoom(id)

	if (!room) {
		notFound()
	}

	const createdAtFormatted = formatDate(room.createdAt)

	return (
		<>
			<Link
				href="/"
				className="flex items-center gap-1 text-zinc-600 hover:text-zinc-900"
			>
				<ChevronLeft className="size-6" />
				<span className="font-medium">Voltar para salas</span>
			</Link>

			<header className="mt-8">
				<h1 className="text-3xl font-bold">{room.name}</h1>
				<p className="leading-relaxed my-2 text-zinc-600">{room.description}</p>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1 text-zinc-600">
						<Award className="size-4" />
						<span className="text-sm">{room.kudoCards.length} kudos</span>
					</div>

					<div className="flex items-center gap-1 text-zinc-600">
						<CalendarFoldIcon className="size-4" />
						<span className="text-sm">Criada em {createdAtFormatted}</span>
					</div>
				</div>
			</header>

			<div className="flex items-center justify-between mt-8 mb-6">
				<h1 className="text-2xl font-bold text-violet-600">Kudo Cards</h1>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="default" className="text-base">
							Adicionar Kudo Card
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[500px] font-sans">
						<DialogHeader>
							<DialogTitle className="font-bold">
								Criar um Kudo Card
							</DialogTitle>

							<DialogDescription>
								Envie uma mensagem de agradecimento ou reconhecimento
							</DialogDescription>
						</DialogHeader>

						<NewKudoForm roomId={room.id} />
					</DialogContent>
				</Dialog>
			</div>

			{room.kudoCards.length === 0 && (
				<div className="flex items-center justify-center gap-2">
					<AlertCircle className="size-5 text-zinc-600" />
					<p className="text-zinc-600">Nenhum kudo card encontrado.</p>
				</div>
			)}

			<div className="grid grid-cols-3 gap-4">
				{room.kudoCards.map(kudoCard => (
					<KudoCardItem key={kudoCard.id} data={kudoCard} />
				))}
			</div>
		</>
	)
}
