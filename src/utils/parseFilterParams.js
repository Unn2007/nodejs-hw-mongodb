const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    const isContactType = (contactType) => ['work', 'home', 'personal'].includes(contactType);
  
    if (isContactType(contactType)) return contactType;
  };

  const parseBool = (bool) => {
    if (typeof bool === 'boolean') return bool; 
    if (typeof bool !== 'string') return; 
  
    const normalized = bool.toLowerCase(); 
    if (normalized === 'true') return true;
    if (normalized === 'false') return false;
  
    return; 
  }

  
  
  
  export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;
    
  
    const parsedContactType = parseContactType(contactType);
    const parsedisFavourite = parseBool(isFavourite);
    
  
    return {
        contactType: parsedContactType,
        isFavourite: parsedisFavourite
      
    };
  };