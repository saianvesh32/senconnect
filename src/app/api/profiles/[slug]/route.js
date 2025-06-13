import connectToDb from "../../../../lib/utils";
import { User } from "../../../../lib/models";
import { NextResponse } from "next/server";

// Function to handle GET requests
export const GET = async (req, { params }) => {
  try {
    // Destructure id from params
    const { slug } = params;
    console.log("heyy I am in route5", slug);

    // Connect to the database
    await connectToDb();

    // Find the user by id
    const user = await User.findOne({ _id: slug });
    console.log(user, "**");

    // Return the user as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
};
