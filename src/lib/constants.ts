import { AvailabilityStatus } from "./types";

export const TimeZones: string[] = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Tokyo",
  "Australia/Sydney",
];

export const AvailabilityDays: AvailabilityStatus[] = [
    { id: 1, active: false, day: 'Monday' },
    { id: 2, active: false, day: 'Tuesday' },
    { id: 3, active: false, day: 'Wednesday' },
    { id: 4, active: false, day: 'Thursday' },
    { id: 5, active: false, day: 'Friday' },
    { id: 6, active: false, day: 'Saturday' },
    { id: 7, active: false, day: 'Sunday' },
]

export const SuggestedTimes = [
  "10:00 AM - 11:00 AM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
];

export const RescheduleSuggestedTimes = [
  "2023-06-16 10:00",
  "2023-06-16 14:00",
  "2023-06-17 09:00",
  "2023-06-17 15:00",
];
