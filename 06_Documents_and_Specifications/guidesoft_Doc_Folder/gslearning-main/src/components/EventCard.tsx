import React from 'react';
import { Calendar, Clock, Users, IndianRupee, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegisterClick: (event: Event) => void;
}

export default function EventCard({ event, onRegisterClick }: EventCardProps) {
  const spotsLeft = event.maxAttendees - event.currentAttendees;
  const isAlmostFull = spotsLeft <= 5;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 group">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Event type badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold capitalize">
          {event.type}
        </div>

        {/* Spots left indicator */}
        {isAlmostFull && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Only {spotsLeft} spots left!
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>{event.date.toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-green-500" />
            <span>{event.duration}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-purple-500" />
            <span>{event.currentAttendees}/{event.maxAttendees} registered</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-red-500" />
            <span>Online Event</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Instructor: <span className="font-medium text-gray-900">{event.instructor}</span>
          </p>
        </div>

        {/* Price and registration */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <IndianRupee className="h-5 w-5 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">{event.price}</span>
          </div>

          <button
            onClick={() => onRegisterClick(event)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}