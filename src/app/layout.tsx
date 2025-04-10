import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
	variable: '--font-quicksand',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Clappy',
	description:
		'Clappy é uma plataforma de Kudo Cards que incentiva o reconhecimento entre colegas de equipe, promovendo uma cultura de gratidão, motivação e colaboração no ambiente de trabalho.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${quicksand.variable} antialiased`}>
				<div className="min-h-dvh flex flex-col font-sans">
					<Header />
					<main className="flex-1 max-w-7xl w-full mx-auto py-8 px-4">
						{children}
					</main>
					<Footer />
				</div>
				<Toaster />
			</body>
		</html>
	)
}
