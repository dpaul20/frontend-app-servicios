import bcrypt from "bcryptjs";

export async function registerUser(data: any): Promise<any>{
  try {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
        firstName: data.firstName,
        lastName: data.lastName,
      }),
    });

    return response;
  } catch (error) {
    console.error("registerUser error", error);
    return error;
  }
}
