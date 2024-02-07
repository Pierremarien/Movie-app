import { urlBuilder } from "./urlBuilder";

export async function fetchAccountDetails(sessionId: string) {
    const url = urlBuilder(`/account`, { session_id: sessionId });
    const res = await fetch(url);
    const data = await res.json();
    return data;
    }