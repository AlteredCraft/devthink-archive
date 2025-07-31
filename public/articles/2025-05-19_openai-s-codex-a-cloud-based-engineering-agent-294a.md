---
title: OpenAI's Codex: a cloud-based engineering agent
author: Sam Keen
date: May 19, 2025
url: https://devthink.ai/p/openai-s-codex-a-cloud-based-engineering-agent-294a
scraped_at: 2025-07-29T19:16:41.509811
---

# OpenAI's Codex: a cloud-based engineering agent

*By Sam Keen on May 19, 2025*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Welcome to the latest edition of [DevThink.AI]("https://DevThink.AI")! A heartfelt thank you to all our readers for your continued support as we curate essential AI content for software developers. This issue is packed with insights you won't want to miss, including an exclusive look at OpenAI's new cloud-based engineering agent Codex and a comprehensive guide on building document knowledge graphs with LLMs and Neo4j. We've also included deep dives into Merkle trees for codebase indexing and ByteDance's multi-agent RAG framework. Grab your favorite beverage and dive into this collection of cutting-edge AI developments that matter to your development workflow!



## 📖 **TUTORIALS & CASE STUDIES**

### **How Merkle Trees Power Cursor's Fast Codebase Indexing**

Estimated read time: 15 min



[This technical deep-dive]("https://read.engineerscodex.com/p/how-cursor-indexes-codebases-fast") reveals how Cursor's AI-powered IDE achieves efficient codebase indexing using Merkle trees. The system chunks code intelligently, creates embeddings, and enables fast incremental updates, allowing developers to leverage AI features while maintaining code privacy and reducing bandwidth usage.

### **Crafting Custom Dev Tools with LLMs and PlantUML**

Estimated read time: 18 min



[This practical guide]("https://martinfowler.com/articles/exploring-gen-ai/16-building-custom-tooling-with-llms.html") demonstrates how developers can leverage LLMs to build custom tools, using a PlantUML extension project as an example. It shows how LLMs can handle boilerplate tasks while developers focus on design decisions, followed by collaborative refinement for production-ready code.

### **Unlocking Better RAG Systems with Embeddings**

Estimated read time: 18 min

For developers working with RAG systems, [this in-depth exploration]("https://technicalwriting.dev/ml/embeddings/overview.html") demystifies embeddings technology, explaining how it enables semantic comparison of texts at unprecedented scales. The article covers implementation details, compares leading embedding models from major providers, and demonstrates how embeddings power modern AI applications.

### **Building Document Knowledge Graphs with LLMs and Neo4j**

Estimated read time: 18 min



Learn how to create dynamic knowledge graphs from documentation using [CocoIndex's step-by-step approach]("https://cocoindex.io/blogs/knowledge-graph-for-docs/"). This guide demonstrates implementing LLM-powered relationship extraction, entity mapping, and real-time graph updates with Neo4j, perfect for developers building modern documentation systems with semantic understanding capabilities.

### **Auth for Enterprise-Ready MCP**

Estimated read time: 15 min



[This technical article]("https://aaronparecki.com/2025/05/12/27/enterprise-ready-mcp") introduces integrating MCP with enterprise Single Sign-On systems. The proposed Cross-App Access approach streamlines how AI agents connect to enterprise applications, eliminating repetitive authentication steps while giving administrators better control over application access permissions.

##

## 🧰 **TOOLS**

### **OpenAI's Codex: a cloud-based engineering agent**

Estimated read time: 6 min read + 53 min Podcast



OpenAI has launched [Codex]("https://www.latent.space/p/codex"), a web-based coding agent available to ChatGPT Pro users. Unlike traditional AI coding assistants, Codex runs in its own virtual environment, can autonomously navigate directories, and explains its actions clearly. This development comes as OpenAI reportedly negotiates a $3 billion acquisition of Windsurf, highlighting the growing importance of AI coding tools.

### **Pydantic Launches Secure Python Execution for AI**

Estimated read time: 8 min

The [Pydantic team has released a new MCP server]("https://github.com/pydantic/pydantic-ai/tree/main/mcp-run-python") that enables secure Python code execution in AI applications. Built on Pyodide and Deno, this MCP server creates a sandboxed environment for running Python code, making it ideal for AI agents that need to execute dynamic code while maintaining security.

### **MarkItDown: Microsoft's Document-to-Markdown Converter**

Estimated read time: 8 min



[Microsoft's new Python utility]("https://github.com/microsoft/markitdown") converts various document formats into Markdown, optimized for LLM processing. Supporting PDFs, Office documents, images, and audio files, it preserves document structure while generating token-efficient output. The tool offers both CLI and Python API interfaces, making it valuable for RAG implementations and AI applications.

### **DeerFlow: ByteDance's Multi-Agent RAG Framework**

Estimated read time: 15 min



[ByteDance's open-source framework]("https://github.com/bytedance/deer-flow") combines LLMs with specialized tools for web search, crawling, and Python execution. Built on LangGraph, it implements a multi-agent architecture for automated research and content generation, featuring human-in-the-loop capabilities and seamless integration with various LLM providers.

### **Connect AI Agents to Apps with Airweave**

Estimated read time: 8 min



[This powerful tool]("https://github.com/airweave-ai/airweave") for RAG implementations enables AI agents to semantically search across 25+ integrated data sources including Notion, Slack, and various databases. This open-source solution offers Python and TypeScript SDKs, multi-tenant architecture, and incremental updates, simplifying agent-based application development.

### **Ollama's Engine Upgrade Powers Multimodal AI**

Estimated read time: 8 min



[Ollama's significant upgrade]("https://ollama.com/blog/multimodal-models") to its local inference engine now supports multimodal models like Llama 4 and Gemma 3. The new architecture improves model modularity, memory management, and accuracy while enabling developers to run sophisticated vision-language models locally. This advancement sets the foundation for future capabilities in speech, image, and video generation.

## 📰 **NEWS & EDITORIALS**

### **Claude's System Prompt Reveals Modern LLM Tooling**

Estimated read time: 8 min



[This analysis]("https://www.dbreunig.com/2025/05/07/claude-s-system-prompt-chatbots-are-more-than-just-models.html") reveals Claude's extensive system prompt, highlighting how modern LLMs integrate tools through MCP servers. The 16,739-word prompt demonstrates sophisticated tool management, behavior controls, and hotfixes, offering valuable insights for developers building AI applications with tool-using capabilities.

### **Programming's Evolution in the AI Era**

Estimated read time: 12 min

As AI transforms software development, [this article]("https://cacm.acm.org/opinion/what-is-programming/") examines how we define programming and the programmer's role. The authors argue that focusing solely on code writing misses crucial aspects like problem-solving, abstraction, and domain understanding - skills that remain essential even as AI tools advance.

### **Google's AI Futures Fund Offers Model Access to Startups**

Estimated read time: 4 min

Google's [new initiative]("https://blog.google/technology/google-labs/ai-futures-fund/") offers startups privileged access to advanced models like Gemini, Imagen, and Veo, along with technical expertise and equity funding. The program provides Google Cloud credits, collaboration with experts, and direct investment opportunities, enabling developers to build and scale innovative AI applications.

### **AlphaEvolve: DeepMind's Gemini Agent Revolutionizes Algorithms**

Estimated read time: 15 min



[Google DeepMind's latest breakthrough]("https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/") combines Gemini LLMs with automated evaluators to evolve complex algorithms. AlphaEvolve has improved Google's data center efficiency, enhanced chip design, and accelerated AI training processes. For developers, it demonstrates how LLMs can tackle advanced algorithmic challenges while maintaining human-readable, deployable code.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
