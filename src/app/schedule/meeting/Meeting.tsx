"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { AddParticipant } from "./_component/AddParticipant";
import { SuggestedTime } from "./_component/SuggestedTimes";

export const Meeting = () => {
  const [participants, setParticipants] = useState<string[]>([""]);
  const [selectedTime, setSelectedTime] = useState("");
  console.log(selectedTime);

  const addParticipant = () => {
    setParticipants([...participants, ""]);
  };

  const updateParticipant = (index: number, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const scheduleAndRedirect = () => {
    console.log("Scheduling meeting...");
    console.log("Redirecting to dashboard...");
  };

  return (
    <>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Schedule New Meeting</CardTitle>
          <CardDescription>
            Invite participants and set up your meeting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <AddParticipant
            participants={participants}
            updateParticipant={updateParticipant}
            addParticipant={addParticipant}
          />

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Availability Overview</h3>
            <Card>
              <CardContent className="p-4">
                <p>Your time zone: Eastern Time (ET)</p>
                <p>
                  {"Participants'"} time zones: Pacific Time (PT), Central
                  European Time (CET)
                </p>
                <p>Overlapping availability: 10:00 AM - 2:00 PM ET</p>
              </CardContent>
            </Card>
          </div>

          <SuggestedTime setSelectedTime={setSelectedTime} />
        </CardContent>
        <CardFooter>
          <Button onClick={scheduleAndRedirect} className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" /> Confirm and Send Invites
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
