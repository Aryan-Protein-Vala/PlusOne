import { loadOpenPlans } from '@/app/marketplace/actions'
import MarketplaceClient from './MarketplaceClient'

export default async function MarketplaceFeedPage() {
  const result = await loadOpenPlans()
  return <MarketplaceClient plans={result.data as any[]} error={result.error} />
}
