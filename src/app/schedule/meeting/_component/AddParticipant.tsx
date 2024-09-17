import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddParticipantProps {
  participants: string[];
  updateParticipant: (index: number, val: string) => void;
  addParticipant: () => void;
}

export const AddParticipant = ({
  participants,
  updateParticipant,
  addParticipant,
}: AddParticipantProps) => {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Invite Participants</h3>
        {participants.map((participant, index) => (
          <Input
            key={index}
            type="email"
            placeholder="Enter participant's email"
            value={participant}
            onChange={(e) => updateParticipant(index, e.target.value)}
            className="mb-2"
          />
        ))}
        <Button onClick={addParticipant} variant="outline" className="w-full">
          <Users className="mr-2 h-4 w-4" /> Add Participant
        </Button>
      </div>
    </>
  );
};
