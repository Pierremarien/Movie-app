export function urlBuilder(
  path: string,
  params: Record<string, string>
): string {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const urlParams = new URLSearchParams(params).toString();
  return `https://api.themoviedb.org/3${path}?api_key=${apiKey}&${urlParams}`;
}
