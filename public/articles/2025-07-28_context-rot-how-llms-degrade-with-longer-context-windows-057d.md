---
title: Context Rot: How LLMs Degrade with Longer Context Windows
author: Sam Keen
date: July 28, 2025
url: https://devthink.ai/p/context-rot-how-llms-degrade-with-longer-context-windows-057d
scraped_at: 2025-07-29T19:15:15.563909
---

# Context Rot: How LLMs Degrade with Longer Context Windows

*By Sam Keen on July 28, 2025*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**



## 📖 **TUTORIALS & CASE STUDIES**

### **Context Rot: How LLMs Degrade with Longer Context Windows**

*15 min read*



Chroma Research reveals that [LLMs exhibit "context rot"]("https://research.trychroma.com/context-rot") - performance degradation that increases non-uniformly as context windows grow, even on simple tasks. Testing 18 models across controlled experiments, they found that NIAH benchmark scores don't predict real-world long-context performance. Models struggle more with semantic similarity matches than lexical ones, and distractors compound failures at longer lengths. Even basic text replication tasks show declining accuracy as context scales. The delta: Context engineering becomes as critical as prompt engineering - where and how information appears in your context window now matters more than simply fitting it in.

### **5 Fun Generative AI Projects for Absolute Beginners**

*4 min read*

This comprehensive tutorial bridges theory and practice by walking through [five complete Gen AI projects]("https://www.kdnuggets.com/5-fun-generative-ai-projects-for-absolute-beginners") spanning text generation, local image synthesis, multimodal chatbots, fine-tuning, and RAG systems. Each project teaches essential building blocks: a React recipe generator using GPT APIs, local Stable Diffusion setup, voice-vision-text medical assistant with LLaVA and Whisper, modern LLM fine-tuning with Unsloth, and scratch-built RAG with vector databases. The delta: Beginner AI education has shifted from isolated demos to complete system thinking - students now learn production patterns like local deployment, multimodal integration, and custom training from day one.

### **Kimi K2 vs Claude Sonnet 4: The Real-World Agentic Coding Test**

*4 min read*

Composio's head-to-head comparison reveals a surprising challenger to Claude's coding dominance. Testing both models on identical chat app builds with [MCP integration]("https://composio.dev/blog/kimi-k2-vs-claude-4-sonnet-what-you-should-pick-for-agentic-coding"), Kimi K2 delivered cleaner code at 10x lower cost ($0.53 vs $5 for equivalent work). While Claude Sonnet 4 generates responses 3x faster, Kimi K2's implementations were closer to working solutions, especially for agentic workflows. The delta: Open-source models are reaching parity with premium closed models in code quality while dramatically undercutting on price, forcing a rethink of the cost-versus-speed equation in AI-assisted development.

### **How Anthropic Teams Use Claude Code**

*12 min read*



Anthropic's internal teams across [data infrastructure, security, ML engineering, and product design]("https://www.anthropic.com/news/how-anthropic-teams-use-claude-code") are fundamentally transforming their workflows with Claude Code. Non-technical staff build complex React dashboards without JavaScript knowledge, while engineers use autonomous loops to implement features like Vim mode with 70% AI-generated code. The delta: Internal dogfooding reveals that AI coding assistants aren't just productivity tools—they're reshaping team structures by eliminating the traditional technical/non-technical divide in software development.

##

## 🧰 **TOOLS**

### **BugBot: AI Code Review Beyond Linting**

*2 min read*



Cursor's [BugBot]("https://cursor.com/en/bugbot") shifts AI code review from catching typos to identifying actual bugs and security issues before production. Unlike traditional linters, it uses frontier AI models to understand code context and catch "real bugs" that human reviewers miss. Teams can define custom coding standards and project-specific guidelines, with fixes delivered directly in Cursor IDE or via background agents. The delta: AI code review evolves from syntax checking to semantic understanding, making automated code quality assurance genuinely intelligent.

### **Aider vs. Modern Agentic CLIs: The First-Generation Gap**

*4 min read*

This comprehensive walkthrough of [Aider]("https://thenewstack.io/developer-walk-through-of-aider-an-open-source-agentic-cli/"), one of the original agentic CLIs, reveals how far the space has evolved. The author tests Aider against modern tools like Claude Code and Gemini CLI, finding significant gaps in terminal control, user experience, and model integration. While Aider's git-centric approach and file permission model offer safety benefits, its clunky interface and scanning behavior feel outdated compared to newer alternatives.

The delta: First-generation agentic tools are rapidly becoming obsolete as newer models deliver superior terminal integration and user experience.

### **Claude Code Sub Agents: Specialized AI Assistants for Development Tasks**

*4 min read*



Claude Code now supports [custom sub agents]("https://docs.anthropic.com/en/docs/claude-code/sub-agents") - specialized AI assistants with dedicated purposes, separate context windows, and configurable tool access. Developers can create project-specific or user-level agents for tasks like code review, debugging, or data analysis, with automatic delegation based on task matching and explicit invocation options. The delta: AI development workflows shift from single-agent interactions to orchestrated specialist teams, enabling context preservation and task-specific optimization.

### **Convert Images to Draw.io Diagrams**

*2 min read*

ImageToDrawio transforms static diagram images into fully editable Draw.io files using AI. Upload any diagram screenshot, whiteboard photo, or legacy documentation image, and get back a [native Draw.io file]("https://imagetodrawio.com/") with editable shapes, text, and connections. The tool preserves layout precision while enabling collaboration on previously frozen diagrams. Works with PNG, JPG, JPEG, GIF, and WEBP formats.

The delta: Static diagrams become living documents, eliminating the "I have the image but lost the source file" problem that forces developers to recreate complex architecture diagrams from scratch.

### **Flow Maker, a Visual Agent Builder for LlamaIndex**

*3 min read*



LlamaIndex releases [Flow Maker]("https://github.com/run-llama/flow-maker"), an open-source visual editor that lets developers design agentic workflows using drag-and-drop components, then compile them into standalone TypeScript code. The tool bridges the gap between visual prototyping and production deployment with interactive debugging and dual-execution models - workflows run both in-browser for testing and as compiled Node.js scripts. The delta: Visual workflow builders are moving from prototyping toys to production-ready development tools, making agent creation accessible to non-experts while maintaining code portability.

### **MCPEval: Open-Source Agent Testing Goes Protocol-Level**

*4 min read*

Salesforce researchers unveiled [MCPEval]("https://venturebeat.com/ai/open-source-mcpeval-makes-protocol-level-agent-testing-plug-and-play/"), an open-source toolkit that evaluates AI agents directly within Model Context Protocol servers. Unlike static testing frameworks, MCPEval generates synthetic tasks automatically, captures detailed interaction trajectories, and creates datasets for continuous agent improvement. The system tests agents in their actual deployment environment rather than isolated scenarios. The delta: Agent evaluation shifts from post-deployment monitoring to pre-deployment protocol-level testing, making agent reliability verification as systematic as unit testing.

## 📰 **NEWS & EDITORIALS**

### **Stuck in the Middle: Navigating AI Development Tool Reality**

*8 min read*

A developer's honest take on being caught between [AI hype extremes and dismissive skeptics]("https://blog.korny.info/2025/07/19/clowns-to-the-left-of-me"). While one side claims 50x productivity gains and the other waves around cherry-picked studies, the author finds genuine value in AI tools for daily tasks like fixing blog links, generating scripts, and implementing Kafka features - with measured expectations about learning curves and context costs. The delta: The conversation is shifting from "do AI tools work?" to "how do we use them effectively while avoiding both naive over-reliance and premature dismissal?"

### **LLM Personas: From Genies to Stubborn Donkeys**

*4 min read*

Martin Fowler explores how developers are using [persona metaphors]("https://martinfowler.com/articles/who-is-llm.html") to understand LLM behavior. From Birgitta Böckeler's "stubborn donkey" (eager but inexperienced) to Kent Beck's "genie" and "slot machine" analogies, these mental models help developers navigate LLM unpredictability. Fowler introduces his own: Uriah Heep—outwardly humble but secretly manipulative. The delta: Effective LLM use requires deliberate mental frameworks, shifting from viewing AI as simple tools to understanding them as complex entities requiring nuanced interaction strategies.

### **AI's Share of R&D: The New Budget Reality**

*3 min read*

Startups now face a fundamental shift in R&D spending as [AI costs emerge as a major line item]("https://tomtunguz.com/ai-rd-percent/") alongside traditional talent expenses. With coding agents like Cursor at $200/month and Devin at $500/month, plus additional AI usage costs reaching $1,000+ monthly per engineer, AI expenses now represent 10-15% of total R&D budgets. The delta: R&D planning transforms from predictable talent costs to a hybrid model where AI infrastructure becomes as critical as human capital.

### **OpenAI Teases Imminent GPT-5 Launch: Here's What to Expect**

*4 min read*

OpenAI's [GPT-5 could arrive as early as August]("https://www.zdnet.com/article/openai-teases-imminent-gpt-5-launch-heres-what-to-expect/"), representing the first major architectural shift since GPT-4. Unlike previous releases, GPT-5 will intelligently combine reasoning capabilities from o-series models with standard GPT performance, automatically selecting the optimal approach for each task. This eliminates the current user burden of choosing between speed and quality, while offering unlimited free access at standard intelligence levels. The delta: AI models are evolving from single-purpose tools to adaptive systems that self-optimize for context, fundamentally changing how developers approach model selection and integration.

### **Coding with LLMs in the summer of 2025 (an update)**

*4 min read*

Redis creator Antirez shares how [frontier LLMs like Gemini 2.5 PRO and Claude Opus 4]("https://antirez.com/news/154") have transformed programming since early 2024. He advocates for human-LLM collaboration over autonomous agents, emphasizing extensive context windows, explicit supervision, and treating LLMs as amplifiers rather than replacements. Key practices include providing full codebases as context, using multiple models for complex problems, and maintaining direct control over the development process. The delta: LLMs have evolved from useful assistants to powerful amplifiers that require new collaborative skills - communication ability with AI is now as crucial as traditional coding expertise.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
