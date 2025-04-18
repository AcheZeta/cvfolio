export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Default to UTC to prevent timezone issues
  });
  
  // Ensure we're parsing the date correctly
  return formatter.format(new Date(date));
}