export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/") {
      return new Response("Welcome to the root!", { status: 200 });
    } 
    else if (pathname === "/api/data") {
      const data = { message: "Here is your data" };
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } 
    else if (pathname === "/about") {
      return new Response("About page content", { status: 200 });
    }
    else {
      return new Response("Not Found", { status: 404 });
    }
  }
};
