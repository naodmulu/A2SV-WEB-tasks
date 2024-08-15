"use client";
import React, { useRef, useState } from 'react';
import axios, { isAxiosError } from "axios";
import router from '@/node_modules/next/router';

const VerifyCard = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [error, setError] = useState("")
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);

    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };


  const handleSubmit = async (pin: string) => {
    const userEmail = localStorage.getItem("userEmail");
    const formData = JSON.stringify({
      email: userEmail,
      OTP: pin.toString(),
    });
    console.log(formData);
    try {
      const response = await axios.post(
        "https://akil-backend.onrender.com/verify-email",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        console.log(response);
        router.push("/");
      }
    
    } catch (err) {
      console.log(err);
      if (isAxiosError(err) && err.response) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const allFilled = values.every(value => value.length === 1);

  return (
    <div>
      <div className='mb-3 flex justify-between'>
        {[0, 1, 2, 3].map((_, index) => (
          <input
            key={index}
            type="text"
            className="w-[76px] h-12 text-center font-light text-4xl border-[#4540de49] border-2 rounded-md caret-purple-400"
            placeholder='0'
            maxLength={1}
            ref={(el) => inputRefs.current[index] = el}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <div className='mt-2 p-1'>
        <p className="text-center font-light text-[#7C8493] text-sm">
          You can request to <span className='text-[#4540dee8] font-medium'>Resend</span> code in <br />
          <span className='text-[#4540dee8] font-medium'>0:30</span>
        </p>
      </div>
      <div className="w-fit mt-10">
        <button
          onClick={() => {handleSubmit(values.join(''))}}
          className={`w-[402px] px-6 py-3 text-center text-white rounded-2xl ${
            allFilled ? 'bg-[#4640DE]' : 'bg-[#4640DE4D]'
          }`}
        >
          Continue
        </button>
        {error && (
        <div className="text-center text-red-500 mt-2">
          {error}
        </div>
      )}
      </div>
    </div>
  );
}

export default VerifyCard;
