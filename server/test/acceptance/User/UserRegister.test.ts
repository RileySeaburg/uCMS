import { assertEquals } from "../../../deno_modules.ts";
import UserHelper from "../Helpers/UserHelper.ts";

const ContentTypeJson = "application/json; charset=utf-8";
const baseUrl = "http://localhost:3000/api/user/register";

Deno.test("[http] user.register.wrong.email", async () => {
  const response = await fetch(baseUrl, { method: "POST" });
  const data = await response.json();

  assertEquals(response.status, 200);
  assertEquals(
    data,
    {
      "status": false,
      "error": "user.register.wrong.email",
      data: [],
      pageCount: 0,
    },
  );
});

Deno.test("[http] user.register.ok", async () => {
  await UserHelper.removeUser("admin2@admin.com");
  const requestArgument = {
    login: "admin2@admin.com",
  };
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestArgument),
  });

  const data = await response.json();

  assertEquals(response.status, 200);
  assertEquals(data.status, true);
  assertEquals(data.error, "");
  assertEquals(!!data.data.length, true);
});
