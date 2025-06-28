// 'use client';

// import { useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';
// import { handleRegister } from './handleRegister'; 
// export default function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [warning, setWarning] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGoogleSignIn = async () => {
//     const check = await fetch('/api/check-auth-method', {
//       method: 'POST',
//       body: JSON.stringify({ email }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const result = await check.json();

//     console.log("getted result", result);

//     if (result.exists && result.provider === 'email') {
//       alert('This email is registered with password. Please login with password.');
//       return;
//     }

//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: `${window.location.origin}/`,
//       },
//     });

//     if (error) {
//       console.error('Google Sign In Error:', error);
//       setWarning('Failed to sign in with Google. Please try again.');
//       return;
//     }

//     // The auth flow will handle the rest through the callback route
//   };

//   return (
//     <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">Register with Email</h2>

//       <input
//         className="w-full p-2 border mb-2 rounded"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         className="w-full p-2 border mb-2 rounded"
//         placeholder="Email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         className="w-full p-2 border mb-4 rounded"
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button
//         onClick={() =>
//           handleRegister({
//             email,
//             password,
//             name,
//             setWarning,
//             setLoading,
//           })
//         }
//         className="w-full bg-blue-600 text-white p-2 rounded mb-2"
//         disabled={loading}
//       >
//         {loading ? 'Registering...' : 'Register'}
//       </button>

//       {warning && <p className="text-red-600 text-sm mt-2">{warning}</p>}

//       <div className="flex items-center my-4">
//         <hr className="flex-grow" />
//         <span className="mx-2 text-gray-500">OR</span>
//         <hr className="flex-grow" />
//       </div>

//       <button
//         onClick={handleGoogleSignIn}
//         className="w-full bg-red-600 text-white p-2 rounded"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }


import React from 'react'
import RegisterPage from './RegisterPage'

function page() {
  return (
    <>
    <RegisterPage />
    </>
  )
}

export default page