import httpx
import base64
import re

def fetch_github_context(repo_url: str) -> str:
    """Fetches README and recent commits from a GitHub URL."""
    try:
        # Extract owner/repo
        match = re.search(r"github\.com/([^/]+/[^/]+)", repo_url)
        if not match:
            return "Invalid GitHub URL."
        
        repo_path = match.group(1).replace('.git', '')
        context = f"GitHub Repository: {repo_path}\n\n"
        
        headers = {"Accept": "application/vnd.github.v3+json"}
        
        with httpx.Client() as client:
            # Fetch README
            readme_resp = client.get(f"https://api.github.com/repos/{repo_path}/readme", headers=headers)
            if readme_resp.status_code == 200:
                data = readme_resp.json()
                if "content" in data:
                    readme_content = base64.b64decode(data["content"]).decode('utf-8', errors='ignore')
                    # truncate to avoid massive prompts
                    context += f"--- README ---\n{readme_content[:1500]}...\n\n"
            
            # Fetch Commits
            commits_resp = client.get(f"https://api.github.com/repos/{repo_path}/commits?per_page=5", headers=headers)
            if commits_resp.status_code == 200:
                commits = commits_resp.json()
                context += "--- Recent Commits ---\n"
                if isinstance(commits, list):
                    for c in commits:
                        msg = c.get('commit', {}).get('message', '').split('\n')[0]
                        context += f"- {msg}\n"
        
        return context
    except Exception as e:
        return f"Error fetching GitHub context: {str(e)}"
