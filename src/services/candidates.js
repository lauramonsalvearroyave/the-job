import { request } from "./request";

const getCandidates = async () => {
  return await request("candidates");
};
