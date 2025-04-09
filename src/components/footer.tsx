export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="p-4 border-t border-zinc-200 text-center">
			<p className="text-zinc-600">
				&copy; {currentYear} Clappy. Todos os direitos reservados.
			</p>
		</footer>
	)
}
