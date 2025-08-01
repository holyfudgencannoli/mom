export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "https://magic-of-mushrooms-frontend.moshimoshi8246.workers.dev/",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    return new Response(JSON.stringify({ msg: "This is a new message for testing!" }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://magic-of-mushrooms-frontend.moshimoshi8246.workers.dev/",
      },
    });
  },
};


