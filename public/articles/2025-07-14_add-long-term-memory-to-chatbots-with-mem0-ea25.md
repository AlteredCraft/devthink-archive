---
title: Add Long-Term Memory to Chatbots with Mem0
author: Sam Keen
date: July 14, 2025
url: https://devthink.ai/p/add-long-term-memory-to-chatbots-with-mem0-ea25
scraped_at: 2025-07-29T19:15:32.283436
---

# Add Long-Term Memory to Chatbots with Mem0

*By Sam Keen on July 14, 2025*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thanks for your continued support as we bring you the latest in AI developments. This edition is packed with insights, from adding long-term memory to Gemini 2.5 chatbots to the dramatic collapse of OpenAI's Windsurf acquisition (with Google swooping in to hire the talent). We're also excited to share how one developer built a 20,000-line macOS app using Claude Code while writing less than 1,000 lines manually, plus AWS's upcoming AI agent marketplace launch that could reshape how we discover and deploy AI tools. Let's dive in!

## 📖 **TUTORIALS & CASE STUDIES**

### **Building macOS Apps Using Claude Code**

Estimated read time: 15 min



Indragie Karunaratne built and shipped a native macOS app with 20,000 lines of code, writing less than 1,000 lines manually by leveraging [Claude Code's agentic development capabilities]("https://www.indragie.com/blog/i-shipped-a-macos-app-built-entirely-by-claude-code"). The post details practical techniques for context engineering, priming agents with specifications, and setting up automated feedback loops to maximize AI-generated code quality.

### **Engineering Leaders' Guide to AI Adoption Strategy**

Estimated read time: 20 min



Learn how to lead your engineering teams through AI adoption using proven enablement strategies. This comprehensive guide covers establishing metrics-driven experimentation phases, providing organizational support, and finding the middle path between AI skepticism and over-reliance. Discover practical frameworks for [meaningful AI experimentation]("https://blog.thepete.net/blog/2025/06/26/leading-your-engineers-towards-an-ai-assisted-future/"), including training programs, community building, and measuring impact while maintaining code quality and human oversight.

### **Add Long-Term Memory to Chatbots with Mem0**

Estimated read time: 10 min



Learn how to overcome LLM statelessness by integrating [Mem0's long-term memory system]("https://www.philschmid.de/gemini-with-memory") with Gemini 2.5. This tutorial demonstrates building personalized AI chatbots that remember user preferences across sessions, extract salient information from conversations, and provide context-aware responses using vector embeddings and semantic search.

### **How AI Agents Actually Work in Production**

Estimated read time: 13 min

This walkthrough demystifies [what AI agents can actually do]("https://lethain.com/what-can-agents-do/") by breaking down their four core capabilities: evaluating context windows, suggesting tools, managing flow control, and functioning as software programs. Through practical examples like customer support automation and bug triaging systems, it demonstrates that agents are multipliers on system design quality—not magic solutions.

### **Gemini Nano Arrives in Chrome 137 for Local AI**

Estimated read time: 8 min



Google's Gemini Nano, a 4-6B parameter model with 6K token context, is now available in Chrome 137+ for local AI inference. This guide demonstrates practical implementation of the [Prompt API for structured JSON output]("https://github.com/swyxio/swyxdotio/issues/536"), stateless session management, and function calling patterns essential for RAG and agent systems. Developers can leverage this browser-native LLM without external dependencies, though instruction following remains limited compared to cloud models.

### **Three Tier Framework for Enterprise Agentic AI**

Estimated read time: 22 min



InfoQ introduces a [three-tier enterprise AI architecture]("https://www.infoq.com/articles/agentic-ai-architecture-framework/") that prioritizes governance before autonomy. The framework guides organizations from Foundation tier (security, transparency, data governance), through Workflow tier featuring five orchestration patterns like prompt chaining and evaluator-optimizer, to Autonomous tier with goal-directed planning. Industry implementations vary, with financial services emphasizing bias testing while healthcare focuses on PHI compliance.

### **LlamaIndex Workflows for Document Processing with Human-in-the-Loop**

Estimated read time: 8 min

LlamaIndex demonstrates a Python workflow framework for building sophisticated document processing pipelines. This Jupyter notebook example demonstrates [human-in-the-loop document extraction workflows]("https://github.com/run-llama/workflows-py/blob/main/examples/document_processing.ipynb") integrated with Llama Extract, enabling developers to create AI-powered document processing systems that combine automated extraction with human validation. Perfect for RAG applications requiring reliable data extraction from complex documents.

##

## 🧰 **TOOLS**

### **Stop AI Hallucinations with ask-human MCP**

Estimated read time: 3 min



Mason Yarbrough created a simple MCP server that prevents AI coding assistants from hallucinating by letting them ask questions when uncertain. The [ask-human MCP tool]("https://masonyarbrough.com/blog/ask-human") writes agent questions to a markdown file where developers provide answers, ensuring accurate responses instead of false assumptions. With pip-installable setup and Cursor integration, it transforms unreliable AI into a trainable assistant that knows when to ask for help.

### **Open-Source NotebookLM Alternative Uses LlamaCloud Agents**

Estimated read time: 4 min



Run-llama introduces [NotebookLlama]("https://github.com/run-llama/notebookllama"), an open-source implementation of Google's NotebookLM powered by LlamaCloud infrastructure. The project enables developers to create custom AI agents for data extraction and configure embedding pipelines with OpenAI or custom models. Installation requires uv dependency management, Docker containers, and API keys from OpenAI, ElevenLabs, and LlamaCloud platforms.

### **SmolLM3: Open 3B Model with Reasoning and Long Context**

Estimated read time: 15 min



HuggingFace releases SmolLM3, a competitive 3B parameter model featuring dual-mode reasoning (think/no_think), 128k context support, and multilingual capabilities. The model outperforms Llama-3.2-3B and Qwen2.5-3B while matching larger 4B alternatives. Uniquely, the team shares their complete [engineering blueprint]("https://huggingface.co/blog/smollm3") including architecture details, 11T token training recipe, and synthetic data generation methods, enabling developers to reproduce and build upon their work.

### **GitHub MCP Server Enables Background Copilot Tasks**

Estimated read time: 2 min



GitHub's MCP server now lets developers delegate coding tasks to Copilot's autonomous agent without interrupting their workflow. The [GitHub MCP server integration]("https://github.blog/changelog/2025-07-09-delegate-tasks-to-copilot-coding-agent-from-the-github-mcp-server/") enables starting pull request creation from any MCP-compatible IDE while continuing other work. Copilot handles the task in the background and notifies when ready for review, streamlining development workflows.

### **Google Launches MCP Toolbox for Database AI Integration**

Estimated read time: 8 min



Google's MCP Toolbox simplifies AI-database integration for developers building RAG and agent systems. This open-source [MCP server for databases]("https://github.com/googleapis/genai-toolbox") handles connection pooling, authentication, and provides SDKs for Python, JavaScript, and Go frameworks. Features include natural language database queries, automated schema management, and context-aware code generation directly from your IDE.

## 📰 **NEWS & EDITORIALS**

### **OpenAI’s acquire Windsurf deal collapses, Google Poaches Windsurf Talent**

Estimated read time: 3 min

OpenAI's $3 billion acquisition of AI coding startup Windsurf has collapsed, with Google DeepMind instead hiring CEO Varun Mohan and key R&D staff to advance [agentic coding efforts for Gemini]("https://www.theverge.com/openai/705999/google-windsurf-ceo-openai"). This strategic talent acquisition highlights the intensifying competition for AI coding expertise among tech giants, directly impacting developers using AI-powered coding assistants.

### **Why Developers Should Still Care About Code Quality**

Estimated read time: 4 min

Birgitta Böckeler argues that despite AI coding assistants and "vibe coding," developers must maintain code ownership. He emphasizes that [LLMs are inferrers, not compilers]("https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html"), producing non-deterministic outputs requiring constant risk assessment. Using on-call scenarios as a reality check, he stresses the importance of understanding code, especially tests, when deploying AI-generated changes.

### **Why AGI Isn't Coming Soon: Continual Learning Bottleneck**

Estimated read time: 13 min



Dwarkesh Patel argues that despite impressive capabilities, current LLMs lack [continual learning abilities]("https://www.dwarkesh.com/p/timelines-june-2025") that make human employees valuable. Without the ability to improve over time, build context, and learn from feedback organically, AI systems remain limited for real-world deployment. He predicts reliable computer-use agents by 2028 and human-like learning capabilities by 2032, suggesting a major discontinuity when continuous learning is solved.

### **AWS Launches AI Agent Marketplace with Anthropic**

Estimated read time: 5 min

AWS is launching an AI agent marketplace on July 15 with Anthropic as a key partner. The marketplace will enable startups to offer their [AI agents directly to AWS customers]("https://techcrunch.com/2025/07/10/aws-is-launching-an-ai-agent-marketplace-next-week-with-anthropic-as-a-partner/"), addressing distribution challenges in the fragmented agent ecosystem. Enterprise customers can browse, install, and find agents from a single location. This follows similar marketplaces from Google Cloud and Microsoft, positioning AWS competitively in the growing AI agent space.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
