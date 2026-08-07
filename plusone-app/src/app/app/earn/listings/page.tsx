import { getMyListings } from '@/lib/marketplace'
import ListingsClient from './ListingsClient'

export default async function HostListingsPage() {
  const listings = await getMyListings()
  return <ListingsClient listings={listings} />
}
