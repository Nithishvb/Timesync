"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon, UsersIcon, GlobeIcon } from "lucide-react";
import { SuggestedTime } from "@/app/schedule/meeting/_component/SuggestedTimes";
import { RescheduleSuggestedTimes } from "@/lib/constants";
import { TimeZoneChange } from "./_component/TimeZoneChange";

export function Reschedule() {
  const [selectedTime, setSelectedTime] = useState("");

  const currentMeeting = {
    title: "Project Kickoff Meeting",
    date: "2023-06-15",
    time: "14:00",
    participants: ["John Doe", "Jane Smith", "Bob Johnson"],
    timezone: "UTC",
  };

  const handleReschedule = () => {
    // Logic to update Google Calendar/Calendly and notify participants
    console.log("Rescheduling meeting to:", selectedTime);
    // Redirect to dashboard
    console.log("Redirecting to /dashboard");
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Reschedule Meeting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Current Meeting Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {currentMeeting.date}
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4" />
                {currentMeeting.time}
              </div>
              <div className="flex items-center">
                <UsersIcon className="mr-2 h-4 w-4" />
                {currentMeeting.participants.join(", ")}
              </div>
              <div className="flex items-center">
                <GlobeIcon className="mr-2 h-4 w-4" />
                {currentMeeting.timezone}
              </div>
            </div>
          </div>
          <TimeZoneChange />

          <SuggestedTime
            title={"Suggested New Times"}
            placeholder={"Select new meeting time"}
            setSelectedTime={setSelectedTime}
            suggestedTimes={RescheduleSuggestedTimes}
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleReschedule}
            disabled={!selectedTime}
            className="w-full"
          >
            Reschedule Meeting
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
