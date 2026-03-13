import { useEffect, useState } from "react";

interface StatsData {
    stars: number | string;
    commits: number | string;
    contributors: number | string;
    openIssues: number | string;
    lastCommit: string;
}

export default function GitHubStatsBar() {
    const [stats, setStats] = useState<StatsData>({
        stars: "-",
        commits: "-",
        contributors: "-",
        openIssues: "-",
        lastCommit: "-",
    });

    useEffect(() => {
        fetch("/api/github-stats")
            .then((res) => {
                if (!res.ok) throw new Error("Fetch failed");
                return res.json();
            })
            .then((data) =>
                setStats({
                    stars: data.stars,
                    commits: data.commits,
                    contributors: data.contributors,
                    openIssues: data.openIssues,
                    lastCommit: data.lastCommit,
                })
            )
            .catch(() => {
                setStats({
                    stars: 2,
                    commits: 386,
                    contributors: 1,
                    openIssues: 5,
                    lastCommit: "recently",
                });
            });
    }, []);

    return (
        <div className="w-full flex justify-center pt-4 pb-2">
            <div
                className="flex flex-wrap justify-center items-center gap-2 text-center"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
                <span className="uppercase text-gray-800">STARS</span>
                <span className="font-bold">{stats.stars}</span>
                <span className="text-[#888] mx-1">//</span>

                <span className="uppercase text-gray-800">COMMITS</span>
                <span className="font-bold">{stats.commits}</span>
                <span className="text-[#888] mx-1">//</span>

                <span className="uppercase text-gray-800">CONTRIBUTORS</span>
                <span className="font-bold">{stats.contributors}</span>
                <span className="text-[#888] mx-1">//</span>

                <span className="uppercase text-gray-800">OPEN ISSUES</span>
                <span className="font-bold">{stats.openIssues}</span>
                <span className="text-[#888] mx-1">//</span>

                <span className="uppercase text-gray-800">LAST COMMIT</span>
                <span className="font-bold uppercase">{stats.lastCommit}</span>
            </div>
        </div>
    );
}
