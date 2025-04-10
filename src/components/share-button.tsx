'use client'

import { Button } from '@/components/ui/button'
import { Share2Icon } from 'lucide-react'
import { toast } from 'sonner'

export function ShareButton({ value }: { value: string }) {
	function handleShare() {
		navigator.clipboard.writeText(value)
		toast.success('Link copiado para a área de transferência!')
	}

	return (
		<Button
			onClick={handleShare}
			size="icon"
			className="rounded-full"
			variant="ghost"
		>
			<Share2Icon className="size-5" />
		</Button>
	)
}
