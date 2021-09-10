import { RegisterForm, LoginForm } from "./types";

const appId = "VBEBgyYIb8O2VGq9iV15TWgwwvZ5lDFegTyWSA3h";
const apiKey = "hzPfTJprcKIPrPAez2g7I17N7yCSDk9Sd9vQtnwU";
const revokableSession = "1";
const baseUrl = "https://parseapi.back4app.com";

class UserApi {
  SignUp(user: RegisterForm) {
    return fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": appId,
        "X-Parse-REST-API-Key": apiKey,
        "X-Parse-Revocable-Session": revokableSession,
      },
      body: JSON.stringify(user),
    }).then(async (res) => ({
      statusCode: res.status,
      data: await res.json(),
    }));
  }

  SignIn(user: LoginForm) {
    const url = new URL(baseUrl + "/login")
    const params = {username:user.email, password:user.password}

    url.search = new URLSearchParams(params).toString();

    return fetch(url.toString(), {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": appId,
        "X-Parse-REST-API-Key": apiKey,
        "X-Parse-Revocable-Session": revokableSession,
      },
    }).then(async (res) => ({
      statusCode: res.status,
      data: await res.json(),
    }));
  }
}

export const api = new UserApi();
