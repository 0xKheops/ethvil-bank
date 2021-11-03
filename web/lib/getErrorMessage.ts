export const getErrorMessage = (error: any) =>
  error?.data?.message ?? error?.message ?? null;
