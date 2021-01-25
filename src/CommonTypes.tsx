/**
 *  File: CommonType.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Object types shared across the entire app. 
*/

import { StackScreenProps } from '@react-navigation/stack'

// Navigator types. 
export type RootStackParamList = {
    Contacts: { },
    Details: { name: string }
}
export type ContactsScreenProps = StackScreenProps<RootStackParamList, 'Contacts'>;
export type ContactDetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

// ContactListView types. 
export type ContactListItem = {
  title: string,
  data: Array<ContactInfo>
}

// Contact from JSON
export type ContactInfo = {
  name?: string,
  companyName?: string,
  address?: string,
  birthday?: string,
  email?: string,
  phoneWork?: string,
  phoneHome?: string,
  phoneMobile?: string,
  smallImage?: string,
  largeImage?: string,
  isFavorite?: boolean
}