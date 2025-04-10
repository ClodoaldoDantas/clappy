'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type CreateRoomRequest = {
	name: string
	description: string
}

export async function createRoom(payload: CreateRoomRequest) {
	await prisma.room.create({
		data: {
			name: payload.name,
			description: payload.description,
		},
	})

	revalidatePath('/')

	return {
		success: true,
		message: 'Sala criada com sucesso!',
	}
}

export async function getRooms() {
	return prisma.room.findMany()
}
