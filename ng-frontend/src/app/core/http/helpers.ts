export function parseTimestamp(timestamp: number) {
  if (!timestamp) return null;

  const date = new Date(timestamp);

  const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return `${date.getFullYear()}-${month}-${day}`;
}
