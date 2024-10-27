export const getAllContacts = async ({
    page = 1,
    perPage = 10,
    sortOrder = SORT_ORDER.ASC,
    sortBy = '_id',
    filter = {},
    userId,
  }) => {
    const limit = perPage;
    const skip = (page - 1) * perPage;
  
    // Формируем объект фильтрации
    const queryFilter = { userId }; // Фильтр по userId для текущего пользователя
  
    // Добавляем фильтры, если они заданы
    if (filter.contactType) {
      queryFilter.contactType = filter.contactType;
    }
    if (filter.isFavourite) {
      queryFilter.isFavourite = filter.isFavourite;
    }
  
    // Используем queryFilter при вызове find()
    const contactsCount = await ContactsCollection.find(queryFilter).countDocuments();
  
    const contacts = await ContactsCollection.find(queryFilter)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec();
  
    const paginationData = calculatePaginationData(contactsCount, perPage, page);
  
    return {
      data: contacts,
      ...paginationData,
    };
  };

  export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  userId
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  // Фильтр по userId и дополнительные фильтры
  const contactsQuery = ContactsCollection.find({ userId });

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }

  if (filter.isFavourite) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

{
  "name":"Din",
  "phoneNumber":"380564563726",
  "isFavourite":false,
  "contactType":"home"
  }

  {
    "email":"ronaldo1234@i.ua",
    "password":"ronaldo1234"
    
    }

    contacts/66ff82e44220ab7d91ec67a4

    {
      "email":"ronaldo1234@i.ua",
      "password":"ronaldo1234"
      
      }

      {
        "name":"Din",
        "phoneNumber":"380564563726",
        "isFavourite":false,
        "contactType":"home"
        }