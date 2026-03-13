import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const defaultData = {
        stars: 2,
        commits: 386,
        contributors: 1,
        openIssues: 5,
        lastCommit: "recently",
    };

    try {
        const headers = {
            "User-Agent": "sandstore-website",
        };

        // @ts-ignore
        const repoRes = await fetch("https://api.github.com/repos/AnishMulay/sandstore", {
            headers,
            next: { revalidate: 86400 },
        });

        // @ts-ignore
        const contribRes = await fetch("https://api.github.com/repos/AnishMulay/sandstore/contributors?per_page=100", {
            headers,
            next: { revalidate: 86400 },
        });

        // @ts-ignore
        const commitsRes = await fetch("https://api.github.com/repos/AnishMulay/sandstore/commits?per_page=1", {
            headers,
            next: { revalidate: 86400 },
        });

        if (!repoRes.ok || !contribRes.ok || !commitsRes.ok) {
            return res.status(200).json(defaultData);
        }

        const repoData = await repoRes.json();
        const contribData = await contribRes.json();
        const commitsData = await commitsRes.json();

        let commits = 386;
        const linkHeader = commitsRes.headers.get("Link");
        if (linkHeader) {
            const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
            if (match && match[1]) {
                commits = parseInt(match[1], 10);
            }
        }

        let lastCommit = "recently";
        if (commitsData && commitsData.length > 0 && commitsData[0].commit?.author?.date) {
            const dateStr = commitsData[0].commit.author.date;
            const commitDate = new Date(dateStr);
            const now = Date.now();
            const diffTime = Math.abs(now - commitDate.getTime());
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 1) {
                lastCommit = "today";
            } else if (diffDays === 1) {
                lastCommit = "yesterday";
            } else if (diffDays >= 2 && diffDays <= 6) {
                lastCommit = `${diffDays} days ago`;
            } else if (diffDays >= 7 && diffDays <= 13) {
                lastCommit = "1 week ago";
            } else if (diffDays >= 14 && diffDays <= 27) {
                const weeks = Math.floor(diffDays / 7);
                lastCommit = `${weeks} weeks ago`;
            } else {
                const months = Math.floor(diffDays / 30) || 1;
                lastCommit = `${months} months ago`;
            }
        }

        return res.status(200).json({
            stars: repoData.stargazers_count ?? defaultData.stars,
            commits: commits,
            contributors: contribData.length ?? defaultData.contributors,
            openIssues: repoData.open_issues_count ?? defaultData.openIssues,
            lastCommit: lastCommit,
        });
    } catch (error) {
        return res.status(200).json(defaultData);
    }
}
