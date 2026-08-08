const PROHIBITED_TERMS = [
  'sex', 'sexual', 'escort', 'escorting', 'prostitut', 'nude', 'nudity', 'porn', 'blowjob', 'handjob',
  'onlyfans', 'sugar daddy', 'sugar mommy', 'sex work', 'hookup', 'cam girl', 'cam boy',
  'drugs', 'cocaine', 'weed', 'weapon', 'gun', 'traffick', 'minor', 'underage',
  'scam', 'scammer', 'fraud', 'ponzi', 'double your money', 'guaranteed return', 'investment scheme',
]

export function containsProhibitedContent(...values: Array<string | null | undefined>) {
  const content = values.filter(Boolean).join(' ').toLowerCase().replace(/[^a-z0-9]+/g, ' ')
  return PROHIBITED_TERMS.some((term) => content.includes(term))
}

export const PROHIBITED_CONTENT_MESSAGE = 'This content is not allowed on PlusOne. PlusOne is for lawful social activities and earning through shared plans, not sexual services, scams, illegal activity, or anything involving minors.'
