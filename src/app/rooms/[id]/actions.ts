'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type CreateKudoCardRequest = {
	sender: string
	recipient: string
	message: string
	roomId: string
}

export async function createKudoCard(payload: CreateKudoCardRequest) {
	await prisma.kudoCard.create({
		data: {
			sender: payload.sender,
			recipient: payload.recipient,
			message: payload.message,
			roomId: payload.roomId,
		},
	})

	revalidatePath(`/rooms/${payload.roomId}`)

	return {
		success: true,
		message: 'Kudo card criado com sucesso!',
	}
}

export async function getRoom(id: string) {
	const room = await prisma.room.findUnique({
		where: {
			id,
		},
		include: {
			kudoCards: {
				orderBy: {
					createdAt: 'desc',
				},
			},
		},
	})

	return room
}
