import { APP_MOCKUP_DELAY } from "../config/appConfig";

export async function homeLoader({ params }) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "home" });
    }, APP_MOCKUP_DELAY);
  });
}
