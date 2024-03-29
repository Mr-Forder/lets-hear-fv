
export const setTokenCookie = (token: string) => {
   
    fetch("/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
    })
}
//remove cookie
export const removeTokenCookie = () => {
    fetch("/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  };