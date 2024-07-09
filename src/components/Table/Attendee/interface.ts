export interface AttendeeProps {
  batchId: string;
  countryId?: string;
  fullNames: string;
  email: string;
  phoneNumber: string;
  stateId: string;
  station: string;
  status: boolean;
}

export interface AttendeeTableProps {
  attendees: AttendeeProps[];
}
