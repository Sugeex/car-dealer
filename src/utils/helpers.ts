export function toAbsoluteUrl(pathname: string): string {
  const baseUrl = import.meta.env.BASE_URL;

  if (baseUrl && baseUrl !== '/') {
    return import.meta.env.BASE_URL + pathname;
  } else {
    return pathname;
  }
}

export const formatNumber = (num: string | number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}