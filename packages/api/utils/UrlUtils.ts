export const UrlUtils = {
  buildQueryString: (filter: Partial<{
    [key: string]: string | number | boolean | undefined;
  }>) => {
    const query = new URLSearchParams();
    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        query.set(key, value.toString());
      }
    });
    return query.toString();
  },
};
