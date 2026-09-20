const cardImages = import.meta.glob<string>('/src/assets/images/games/*-card.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getGameCardImage(slug: string): string {
  const url = cardImages[`/src/assets/images/games/${slug}-card.jpg`];

  if (!url) {
    throw new Error(`Card image not found for game "${slug}"`);
  }

  return url;
}
