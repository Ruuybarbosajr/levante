export function handlePeriod(dateISO?: Date) {
  if (dateISO) {
    const date = new Date(dateISO);
    return {
      lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
      gt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 0, -1),
    };
  }
  return {};
}
