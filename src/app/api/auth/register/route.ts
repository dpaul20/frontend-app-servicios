import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const data = await request.json();
  const newUser = await axios.post("http://localhost:8080/auth/signup", data);

  return NextResponse.json(newUser.data, { status: 201 });
}
