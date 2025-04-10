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
import { createKudoCard } from '../actions'

const formSchema = z.object({
	sender: z.string().min(2, {
		message: 'O nome precisa ter pelo menos 2 caracteres.',
	}),
	recipient: z.string().min(2, {
		message: 'O destinatário precisa ter pelo menos 2 caracteres.',
	}),
	message: z.string().min(10, {
		message: 'A mensagem precisa ter pelo menos 10 caracteres.',
	}),
})

type NewKudoFormValues = z.infer<typeof formSchema>

export function NewKudoForm({ roomId }: { roomId: string }) {
	const form = useForm<NewKudoFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			sender: '',
			recipient: '',
			message: '',
		},
	})

	async function onSubmit(values: NewKudoFormValues) {
		const response = await createKudoCard({
			sender: values.sender,
			recipient: values.recipient,
			message: values.message,
			roomId,
		})

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
					name="sender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Seu nome</FormLabel>
							<FormControl>
								<Input placeholder="Digite seu nome" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="recipient"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome do Destinatário</FormLabel>
							<FormControl>
								<Input placeholder="Digite o nome do destinatário" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Mensagem</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Escreva sua mensagem de agradecimento..."
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={form.formState.isSubmitting}>
					Enviar Kudo Card
				</Button>
			</form>
		</Form>
	)
}
