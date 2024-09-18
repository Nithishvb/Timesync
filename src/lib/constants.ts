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

export const AvailabilityDays: AvailabilityStatus = {
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
  Sunday: false,
};

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
