import { UrlParam } from '../types/urlTypes';

export const composeUrl = (
  url: string,
  endpoint: string,
  params: UrlParam): string => {
  const paramsString = new URLSearchParams(params);
  return `${url}/${endpoint}?${paramsString}`;
};