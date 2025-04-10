import { Award } from 'lucide-react'
import Link from 'next/link'

export function Header() {
	return (
		<header className="p-4 border-b border-zinc-200">
			<Link href="/" className="flex items-center justify-center gap-1">
				<Award size={24} className="text-violet-500" />
				<span className="text-lg font-bold text-zinc-900">Clappy</span>
			</Link>
		</header>
	)
}
