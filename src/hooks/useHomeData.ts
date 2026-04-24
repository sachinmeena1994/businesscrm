import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useHomeData() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const ref = doc(db, "pages", "home");
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setData(snap.data().content);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return data;
}