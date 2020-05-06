const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? "prd"
    : "http://localhost:1324/api/v1";

export default function Fetch (url: string, method='GET',body=null){
    return fetch(BASE_URL + url,{
        method: method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: body ? JSON.stringify(body) : null
    })
    .then(response => response.json())
    .catch(e => console.log("fetch error ", e))
}