from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

from api.agents.graph import create_agent_graph
from api.services.github_service import fetch_github_context

app = FastAPI(title="NovaLink AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostRequest(BaseModel):
    topic: str
    post_type: str
    tone: str
    audience: str
    context: str
    github_url: Optional[str] = None

graph = create_agent_graph()

@app.post("/api/generate-post")
async def generate_post(req: PostRequest):
    try:
        combined_context = req.context
        if req.github_url:
            github_data = fetch_github_context(req.github_url)
            combined_context += f"\n\n[GITHUB CONTEXT]\n{github_data}"

        initial_state = {
            "topic": req.topic,
            "post_type": req.post_type,
            "tone": req.tone,
            "audience": req.audience,
            "context": combined_context,
            "research_notes": "",
            "generated_post": "",
            "hashtags": [],
            "image_prompt": "",
            "quality_score": ""
        }
        
        final_state = graph.invoke(initial_state)
        
        return {
            "post": final_state["generated_post"],
            "hashtags": final_state["hashtags"],
            "image_prompt": final_state["image_prompt"],
            "score": final_state["quality_score"]
        }
    except Exception as e:
        print(f"Error generating post: {str(e)}")
        raise HTTPException(status_code=500, detail=f"AI Agent Error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("index:app", host="0.0.0.0", port=8000, reload=True)
