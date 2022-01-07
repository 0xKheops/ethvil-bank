export const getErrorMessage = (error: any) => {
  return error?.data?.message ?? error?.message ?? null;
};
