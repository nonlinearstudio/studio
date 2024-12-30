import { config } from "@/config";

export const getBaseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return config.local;
  } else {
    return config.netlify;
  }
};
