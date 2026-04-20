import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: "1Eu1opKgROzDokeMErh-qYD0LCB7OLgimZCtja0oVyUk",
            range: "Form_responses_1!A1:Z1000",
        });

        const rows = response.data.values || [];

        const headers = rows[0];
        const data = rows.slice(1).map((row) => {
            let obj: Record<string, string> = {};
            headers.forEach((key: string, i: number) => {
                obj[key] = row[i];
            });
            return obj;
        });

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("FULL ERROR:", error);
        return NextResponse.json(
            { error: error.message || "Unknown error" },
            { status: 500 }
        );
    }
}