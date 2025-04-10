'use server'

import prisma from '@/lib/prisma'

export async function getRoom(id: string) {
	const room = await prisma.room.findUnique({
		where: {
			id,
		},
	})

	return room
}
