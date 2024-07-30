import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import RightComponent from "../../components/rightComponent/RightComponent";
import "./notificationInfo.css";

export default function NotificationInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const searchParams = new URLSearchParams(
          new URL(window.location.href).search
        );
        const id = searchParams.get("id");

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/v1/notification/getNotification`,
          {
            params: { id },
          }
        );

        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="notification-div">
        <div className="notification-compo">
          {data ? (
            <>
              <h1>{data.title}</h1>
              <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {data.body}
              </Markdown>
            </>
          ) : (
            <div>No data available</div>
          )}
        </div>
        <RightComponent />
      </div>
    </div>
  );
}
