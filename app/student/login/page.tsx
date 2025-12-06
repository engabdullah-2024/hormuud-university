"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("");

  async function login() {
    const res = await fetch("/api/students/get", {
      method: "POST",
      body: JSON.stringify({ studentId }),
    });

    const data = await res.json();

    if (data.studentId) {
      localStorage.setItem("student", JSON.stringify(data));
      window.location.href = "/student/portal";
    } else {
      alert("Student ID not found");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold">Student Login</h1>
        <input
          className="w-full rounded border p-2"
          placeholder="Enter Student ID"
          onChange={(e) => setStudentId(e.target.value)}
        />
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}
