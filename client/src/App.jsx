import { useEffect } from "react";
import { BASE_URL } from "./constants/constants";

const App = () => {
  useEffect(() => {
    const getHealth = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/health`);
        if (!res.ok) {
          throw new Error("somethning went wrong");
        }
        const data = await res.json();

        console.log({ data });
      } catch (error) {
        console.log(error.mssage);
      }
    };
    getHealth();
  }, []);
  return (
    <div>
      <h1 className="heading center">Welcome to healsync</h1>
    </div>
  );
};

export default App;
