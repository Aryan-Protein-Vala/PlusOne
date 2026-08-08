import { getMyListingsResult } from '@/lib/marketplace'
import ListingsClient from './ListingsClient'

export default async function HostListingsPage() {
  const result = await getMyListingsResult()
  return <ListingsClient listings={result.data} initialError={result.error} />
}
