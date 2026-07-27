from langgraph.graph import StateGraph, START, END
from .state import AgentState
from .nodes import plan_content, write_post, check_quality, generate_hashtags

def create_agent_graph():
    workflow = StateGraph(AgentState)
    
    # Add nodes
    workflow.add_node("planner", plan_content)
    workflow.add_node("writer", write_post)
    workflow.add_node("quality", check_quality)
    workflow.add_node("hashtags", generate_hashtags)
    
    # Add edges
    workflow.add_edge(START, "planner")
    workflow.add_edge("planner", "writer")
    workflow.add_edge("writer", "quality")
    workflow.add_edge("quality", "hashtags")
    workflow.add_edge("hashtags", END)
    
    return workflow.compile()
