import {users} from "@prisma/client";

export type IUserData = Omit<users, 'id' | 'readingGold' | 'nextReading' | 'favoriteBook' | 'favoriteAuthor' >

     
       
      
  