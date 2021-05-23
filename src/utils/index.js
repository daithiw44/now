export const formatDate = (timestamp) => {
  return new Intl.DateTimeFormat('en-UK', { 
    hour12: false,
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric'}).format(new Date(timestamp))
}

export const dateSort = (a,b) => new Date(a.timestamp).getTime() - new Date (b.timestamp).getTime();
