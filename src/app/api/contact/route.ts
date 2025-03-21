import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().optional(),
});

// Use Node.js runtime for better Prisma compatibility
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received contact form submission");
    console.log("Request body:", body);

    const validatedData = contactFormSchema.parse(body);
    console.log("Validated data:", validatedData);

    const { name, email, company, message } = validatedData;

    // Store the lead in the database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || null,
        message: message || null,
      },
    });

    console.log("Lead stored successfully:", lead);
    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    console.error("Error in contact form submission:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to store lead" },
      { status: 500 }
    );
  }
}
