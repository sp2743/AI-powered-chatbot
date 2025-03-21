export const formatDate = (date) => {
    if (!date) return '';
    
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  export const formatTime = (date) => {
    if (!date) return '';
    
    const options = { 
      hour: '2-digit', 
      minute: '2-digit'
    };
    
    return new Date(date).toLocaleTimeString(undefined, options);
  };
  
  export const formatDateTime = (date) => {
    if (!date) return '';
    return `${formatDate(date)} at ${formatTime(date)}`;
  };