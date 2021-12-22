import Session from "../auth";

export const createHttpConfig = async (config) => {
  return config;
};

export const redirect401 = (error) => {
  const { type, code } = error;
  if (type === "error") {
    if (code.includes("Member")) window.location.replace("/plan");
    else Session.destroy("/login?401=true");
  }
};
