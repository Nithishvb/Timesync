"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarPlus, Clock } from 'lucide-react'
import { EventCalendar } from '@/components/ui/EventCalendar';

export function DashBoard() {
  // Placeholder data for user availability
  const availability = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 3:00 PM" },
  ]

  const navigateToScheduleMeeting = () => {
    console.log("Navigating to /schedule-meeting")
    // In a real application, you would use your routing library here
    // For example, with Next.js:
    // router.push('/schedule-meeting')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Your scheduled meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <EventCalendar />
          </CardContent>
          <CardFooter>
            <Button onClick={navigateToScheduleMeeting} className="w-full">
              <CalendarPlus className="mr-2 h-4 w-4" /> Schedule New Meeting
            </Button>
          </CardFooter>
        </Card>

        <div >
          <Card>
            <CardHeader>
              <CardTitle>Your Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {availability.map((day) => (
                  <li key={day.day} className="flex justify-between items-center">
                    <span className="font-medium">{day.day}</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {day.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}