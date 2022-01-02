import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

export const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const fbMessaging = getMessaging();

    const token = await getToken(fbMessaging);
    console.log("User token: ", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
