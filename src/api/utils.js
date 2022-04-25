import Session from "./auth";

export const createHttpConfig = async (config) => {
  return config;
};

export const redirect401 = (error) => {
  const { type, code } = error;
  if (type === "error") {
    Session.destroy("/login?401=true");
  }
};
