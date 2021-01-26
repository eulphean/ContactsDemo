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
    Details: { contactInfo: ContactInfo }
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
  id: string
}

// Data type for the list. 
export type ListData = {
  name?: string,
  companyName?: string,
  largeImgUrl?: string,
  label?: string, 
  info?: string,
  isPhoneNum?: boolean
}

export type ListItem = {
  id: string, 
  data: ListData
}