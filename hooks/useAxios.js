import { useEffect, useState } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https://portfolio.vercel.app/api/";

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    const fetchData = () => {
        axios[method](url,
            JSON.parse(headers),
            JSON.parse(body)
        ).then((res) => {
            setResponse(res.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    };

    return { response, error, loading };
};

export default useAxios;

export function getGitHubOgImageUrl(repoFullName) {
    if (!repoFullName) return null;
    return `https://opengraph.githubassets.com/1/${repoFullName}`;
}
