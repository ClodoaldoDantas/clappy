import { Award } from 'lucide-react'

export function Header() {
	return (
		<header className="p-4 border-b border-zinc-200">
			<div className="flex items-center justify-center gap-2">
				<Award size={24} className="text-violet-500" />
				<h1 className="text-lg font-bold text-zinc-900">Clappy</h1>
			</div>
		</header>
	)
}
