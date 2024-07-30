import Cookie from "js-cookie";

const SetCookie = (cookieName, data) => {
  Cookie.set(cookieName, data, {
    expires: 2,
    secure: true,
    sameSite: "Strict",
    path: "/",
  });
};

export default SetCookie;
