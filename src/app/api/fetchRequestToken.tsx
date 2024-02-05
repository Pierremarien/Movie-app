export async function fetchRequestToken() {
    const bearerToken = process.env.NEXT_PUBLIC_BEARER_API_KEY;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    };
  
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/token/new",
      options
    );
    const data = await res.json();
  
    if (data.success) {
      return data.request_token;
    } else {
      throw new Error("Failed to fetch request token: " + data.status_message);
    }
  }

  export async function createSessionId(requestToken: string) {
    const bearerToken = process.env.NEXT_PUBLIC_BEARER_API_KEY;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({
        request_token: requestToken
      })
    };
  
    const response = await fetch('https://api.themoviedb.org/3/authentication/session/new', options);
    const data = await response.json();
  
    if (data.success) {
      return data.session_id;
    } else {
      throw new Error("Failed to create session ID: " + data.status_message);
    }
  }