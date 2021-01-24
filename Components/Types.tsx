/**
 *  File: ConactDetailView.tsx
    Author: Amay Kataria
    Date: 01/23/2021
    Description: Describes all the types used across the app. 
*/

import { StackScreenProps } from '@react-navigation/stack'

// Navigator types. 
export type RootStackParamList = {
    Contacts: undefined,
    Details: {name: string}
  }
export type ContactsScreenProps = StackScreenProps<RootStackParamList, 'Contacts'>;
export type ContactDetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

// ContactListView types. 
export type ContactListViewProps = { name: string, navProps: ContactsScreenProps }
export type ContactListViewState = { score: number }

// ContactDetailView types. 
export type ContactDetailViewProps = { navProps: ContactDetailsScreenProps }
export type ContactDetailViewState = { }