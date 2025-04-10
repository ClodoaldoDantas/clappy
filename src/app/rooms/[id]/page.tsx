type RoomPageProps = {
	params: Promise<{ id: string }>
}

export default async function RoomPage({ params }: RoomPageProps) {
	const { id } = await params
	return <div>Sala: {id}</div>
}
