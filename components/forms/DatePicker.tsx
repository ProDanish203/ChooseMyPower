"use client"
import { useState } from "react";
import { toast } from "react-toastify";


export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  
  const isDateInPast = (date:Date) => {
    const today = new Date();
    return date < today;
  }
  
  const handleDateChange = (e:any) => {
    const selected = new Date(e.target.value);
    if (!isDateInPast(selected)) {
      setSelectedDate(e.target.value);
    } else {
      toast.error("Please select a valid date.")
    }
  }

  return (
    <form
    className="max-w-[300px] w-full"
    >
    <input type="date" 
    className="w-full border border-primary px-2 py-2 rounded-md text-lg"
    value={selectedDate}
    onChange={handleDateChange}
    />
    </form>
  )
}
