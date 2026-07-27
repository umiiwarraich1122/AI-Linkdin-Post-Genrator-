from typing import TypedDict, List
from pydantic import BaseModel

class AgentState(TypedDict):
    topic: str
    post_type: str
    tone: str
    audience: str
    context: str
    
    # Generated content
    research_notes: str
    generated_post: str
    hashtags: List[str]
    image_prompt: str
    quality_score: str
