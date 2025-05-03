import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const turfs = [
  {
    id: 1,
    name: "Greenfield Arena",
    location: "Coimbatore",
    image: "https://source.unsplash.com/600x400/?football,turf",
    available: true,
  },

  {
    id: 3,
    name: "Skyline Turf",
    location: "Bangalore",
    image: "https://source.unsplash.com/600x400/?sports,ground",
    available: true,
  },
];

export default function TurfBookingPage() {
  const [selectedTurf, setSelectedTurf] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookClick = (turf) => {
    setSelectedTurf(turf);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedTurf(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Your Turf</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {turfs.map((turf) => (
          <Card key={turf.id} className="shadow-md rounded-2xl">
            <img
              src={turf.image}
              alt={turf.name}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{turf.name}</h2>
              <p className="text-gray-500">{turf.location}</p>
              <p
                className={`mt-2 font-medium ${
                  turf.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {turf.available ? "Available" : "Fully Booked"}
              </p>
              <Button
                className="mt-3 w-full"
                disabled={!turf.available}
                onClick={() => handleBookClick(turf)}
              >
                Book Fast
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-md">
          <DialogTitle>Book {selectedTurf?.name}</DialogTitle>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="datetime-local"
              className="w-full p-2 border rounded"
              required
            />
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
