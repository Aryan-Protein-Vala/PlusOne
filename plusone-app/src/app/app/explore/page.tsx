import { getPublishedListings } from '@/lib/marketplace'
import ExploreClient from './ExploreClient'

export default async function ExplorePage() {
  const listings = await getPublishedListings()
  return <ExploreClient listings={listings} />
}
