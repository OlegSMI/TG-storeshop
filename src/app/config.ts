type Device = "mobile" | "web" | null;
type OperationSystem = string | null;

export const detectDevice = () => {
  const userAgent = navigator.userAgent;
  let device: Device = null;
  let os: OperationSystem = null;

  if (/mobile/i.test(userAgent)) {
    device = "mobile";
    if (/android/i.test(userAgent)) {
      os = "android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      os = "ios";
    }
  } else {
    device = "web";
    if (/Windows/i.test(userAgent)) {
      os = "windows";
    } else if (/Mac/i.test(userAgent)) {
      os = "macos";
    } else if (/Linux/i.test(userAgent)) {
      os = "linux";
    }
  }
  return { device: device, os: os };
};
