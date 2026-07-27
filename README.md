# NovaLink AI - LinkedIn Post Generator

NovaLink AI is an advanced, multi-agent AI tool that automatically generates highly engaging, professional LinkedIn posts. 

It seamlessly combines a beautifully designed **React (Vite)** frontend Workspace with a powerful **FastAPI + LangGraph** backend, fully configured for one-click deployment on **Vercel**.

## 🌟 Features
- **Creator Workspace**: A stunning, full-screen, split-column UI with glassmorphism and dynamic animations.
- **GitHub Context Engine**: Paste a GitHub repository URL, and the AI automatically fetches the README and recent commit history to draft highly accurate technical updates!
- **Multi-Agent AI (LangGraph)**:
  - **Planner Agent**: Analyzes your input (and GitHub context) to outline a strategic content plan.
  - **Writer Agent**: Drafts an engaging LinkedIn post based on the plan.
  - **Quality Agent**: Critiques the draft and calculates a quality score.
  - **SEO Agent**: Generates optimized hashtags.
- **One-Click Share**: Send the generated post directly to LinkedIn with pre-filled text and hashtags.
- **Vercel Monorepo Architecture**: Zero-config deployment. Both frontend and serverless backend live in harmony.

## 🚀 Tech Stack
* **Frontend**: React 18, Vite, TailwindCSS, Framer Motion, Lucide Icons.
* **Backend**: Python 3, FastAPI, LangChain, LangGraph, Groq API (Llama-3.3-70b-versatile).

## 🛠️ Local Development

### 1. Backend Setup
From the root of the project:
```bash
python -m venv venv
# Activate venv:
# Windows: .\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

pip install -r api/requirements.txt
```
Create a `.env` file in the root folder and add your Groq API key:
```env
GROQ_API_KEY=your_groq_api_key_here
```
Run the FastAPI server:
```bash
uvicorn api.index:app --port 8000 --reload
```

### 2. Frontend Setup
In a new terminal window at the root of the project:
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser. The Vite proxy will automatically route `/api` calls to your local Python server!

## ☁️ Deployment (Vercel)
This repository is pre-configured to deploy natively on **Vercel**. 
1. Push this code to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically detect Vite for the frontend and build it.
4. Vercel will automatically detect `api/index.py` and deploy the Python backend as Serverless Functions!
5. **Important**: Go to your Vercel Project Settings > Environment Variables, and add `GROQ_API_KEY`.

---
*Built with passion using NovaLink AI.*
