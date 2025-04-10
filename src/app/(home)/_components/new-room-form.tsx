'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { createRoom } from '../actions'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'O nome da sala deve ter pelo menos 2 caracteres.',
	}),
	description: z.string().min(10, {
		message: 'O nome da sala deve ter pelo menos 10 caracteres.',
	}),
})

type NewRoomFormValues = z.infer<typeof formSchema>

export function NewRoomForm() {
	const form = useForm<NewRoomFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			description: '',
		},
	})

	async function onSubmit(values: NewRoomFormValues) {
		const response = await createRoom(values)

		if (response.success) {
			form.reset()
			toast.success(response.message)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome da Sala</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Equipe de Marketing" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descrição</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Descreva o propósito dessa sala..."
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={form.formState.isSubmitting}>
					Criar Sala
				</Button>
			</form>
		</Form>
	)
}
