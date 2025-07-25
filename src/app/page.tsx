import { redirect } from 'next/navigation'
import { defaultLocale } from './config'

export default function RootPage() {
  // Redirect to default locale
  redirect(`/${defaultLocale}`)
}