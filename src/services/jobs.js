import { request } from "./request";

export const getJobs = async () => {
  return await request("jobs");
};
