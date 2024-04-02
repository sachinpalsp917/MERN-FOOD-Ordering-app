import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-10 bg-orange-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight text-white">
          MernEats.com
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
}
