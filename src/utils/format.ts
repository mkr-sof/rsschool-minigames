const numberFormatter = new Intl.NumberFormat('en-US');

export function formatCompactNumber(count: number): string {
  if (count < 1000) {
    return String(count);
  }

  return `${Math.floor(count / 100) / 10}K`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function formatDays(days: number): string {
  return `${days} ${days === 1 ? 'day' : 'days'}`;
}

export function formatDaysShort(days: number): string {
  return `${days}d`;
}

export function getInitials(name: string): string {
  return (name.match(/[A-Z]/g) ?? []).slice(0, 2).join('');
}

export function formatLikes(likesCount: number): string {
  return formatCompactNumber(likesCount);
}
