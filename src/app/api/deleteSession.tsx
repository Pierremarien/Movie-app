import { urlBuilder } from "./urlBuilder";

export async function deleteSession(sessionId: string) {
    const url = urlBuilder("/authentication/session", {});
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId }),
    });
    const data = await res.json();
    return data;
    }