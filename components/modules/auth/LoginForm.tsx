/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginUser } from '@/service/auth/loginUser';
import { Headset, Clock } from 'lucide-react';
import { useActionState, useState } from 'react';

const LoginForm = () => {
  const [success, setSuccess] = useState(true);
  const [state, formAction, isPending] = useActionState(loginUser, null)

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      if (error) {
        return error.message;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  console.log(state, "state");
  // console.log(getFieldError, "email");
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <div className="bg-white rounded-[40px] drop-shadow-sm p-8 md:p-16 flex flex-col lg:flex-row gap-16">

        {/* Left Side: Booking Form */}
        <div className="lg:w-3/5">
          <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <input
              type="email"
              name='email'
              required
              placeholder="Email Address"
              className="md:col-span-2 bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all"
            />
            {getFieldError("email") && (
              <label className="text-red-600">
                {getFieldError("email")}
              </label>
            )}
            <input
              type="password"
              name='password'
              required
              placeholder="Password"
              className="md:col-span-2 bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] mt-4 transition-all"
            />
            {getFieldError("password") && (
              <label className="text-red-600">
                {getFieldError("password")}
              </label>
            )}
            <input
              type="password"
              required
              name='confirmPassword'
              placeholder="Confirm Password"
              className="md:col-span-2 bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] mt-4 transition-all"
            />
            {getFieldError("confirmPassword") && (
              <label className="text-red-600">
                {getFieldError("confirmPassword")}
              </label>
            )}
            <div className="md:col-span-2 mt-4">
              <button type='submit' className="bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1] text-white font-bold py-4 px-10 rounded-full hover:bg-[#3b4bbd] transition-colors shadow-lg">
                {isPending ? "Logging in..." : "Login An Account"}
              </button>
            </div>

            {/* Success Message Placeholder */}
            <div className="md:col-span-2 mt-4 p-4 border border-green-500 rounded-full text-green-600 text-sm font-medium">
              Thank you for your message. It has been sent.
            </div>
          </form>
        </div>

        {/* Right Side: Information */}
        <div className="lg:w-2/5 flex flex-col gap-10 justify-center">
          <div>
            <h2 className="text-[#0a1d37] text-4xl md:text-5xl font-bold mb-6">Make An Account</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Schedule your handyman service with ease. Choose a date and time that works best for you.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Customer Services */}
            <div className="flex items-center gap-6">
              <div className="text-[#4d5edb] p-4 rounded-full border border-gray-100 shadow-sm">
                <Headset size={32} />
              </div>
              <div>
                <h4 className="text-[#0a1d37] text-xl font-bold">Customer Services</h4>
                <p className="text-gray-500">+91 – 123 456 7890</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-6">
              <div className="text-[#4d5edb] p-4 rounded-full border border-gray-100 shadow-sm">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-[#0a1d37] text-xl font-bold">Opening Hours</h4>
                <p className="text-gray-500">Mon - Sat (09:00 - 21:00 Sunday (Closed))</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoginForm;