import React from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXku4nVntoNbWFyglGaVCHlvKckL08edc",
  authDomain: "cricketminesweeper.firebaseapp.com",
  databaseURL: "https://cricketminesweeper-default-rtdb.firebaseio.com",
  projectId: "cricketminesweeper",
  storageBucket: "cricketminesweeper.appspot.com",
  messagingSenderId: "368295011381",
  appId: "1:368295011381:web:39f4bd243463049312fd7c",
  measurementId: "G-4065PW7ZE2",
};

initializeApp(firebaseConfig);

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      // Valid email, proceed with submit logic
      console.log("Submitted!");
    } else {
      // Invalid email, show an error message or take appropriate action
      console.log("Invalid email!");
    }
  };
  return (
    <div className="gradient-background flex items-center justify-center h-full">
      <div className="signup bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4">Sign Up to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Username"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="flex justify-between place-items-center">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-sm"
              onClick={handleSubmit}
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
