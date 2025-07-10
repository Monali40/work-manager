import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  const { userId } = params;

  // Your delete logic here

  return NextResponse.json({
    message: `User with ID ${userId} has been deleted.`,
  });
}
