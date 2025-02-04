export const BaseApi = {
  async GET<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url).then((response) => {
          if (response.status === 200) {
            resolve(response.json());
          } else if (response.status === 429) {
        setTimeout(() => {
          return BaseApi.GET<T>(url);
        }, 1000);
          } else {
            reject(response.statusText);
          }
        });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
};
