export const currentLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = {
            latitude,
            longitude,
          };
          resolve(location);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Browser does not support location"));
    }
  });
};
