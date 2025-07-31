---
title: Multi-Agent-as-a-Service — A Senior Engineer's Overview
author: Sam Keen
date: August 19, 2024
url: https://devthink.ai/p/multi-agent-as-a-service-a-senior-engineers-overview
scraped_at: 2025-07-29T19:22:12.068825
---

# Multi-Agent-as-a-Service — A Senior Engineer's Overview

*By Sam Keen on August 19, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thank you for being a loyal subscriber to our newsletter! This week, we have an engaging lineup of content that I'm confident you'll find valuable. Discover how large language models can enhance Optical Character Recognition, explore a powerful framework for Retrieval Augmented Generation, and learn about the latest innovations in AI-powered database development. Don't miss our deep dive into the Hacker News sentiment analysis and the latest advancements in LLM-based anomaly detection. Let's dive in!



## 📖 **TUTORIALS & CASE STUDIES**

**Introducing workflows beta: a new way to create complex AI applications with LlamaIndex**

Read time: 11 minutes



LlamaIndex introduces a new "workflows" feature, an event-driven architecture that allows software developers to more easily orchestrate AI components like LLMs, data loaders, and rerankers to build complex, agentic AI applications. Workflows provide better debugging, observability, and customization compared to previous pipeline-based approaches, helping developers stay on the cutting edge of Generative AI tooling. [Read more on the LlamaIndex website.]("https://www.llamaindex.ai/blog/introducing-workflows-beta-a-new-way-to-create-complex-ai-applications-with-llamaindex")

### **Exploring Generative AI: Understanding Coding Assistance Tools**

Read Time: 12 minutes

[This article]("https://martinfowler.com/articles/exploring-gen-ai.html") provides an in-depth exploration of Generative AI tools and their impact on software development. It examines the capabilities, interaction modes, and underlying models of AI coding assistants like GitHub Copilot, and offers insights on effectively leveraging these tools in a Retrieval Augmented Generation framework. The author also discusses the potential risks and pitfalls, such as amplifying bad coding practices and review fatigue, and provides strategies for mitigating them.

### **Multi-Agent-as-a-Service — A Senior Engineer's Overview**

Read time: 9 minutes



This article explores how senior engineers can leverage cloud-native principles to build scalable, secure, and highly available multi-agent systems. It introduces the concept of "Multi-Agent-as-a-Service" (MAaaS), which applies best practices from cloud applications to agent development and deployment. The author demonstrates a multi-agent debate system built on [this approach]("https://towardsdatascience.com/multi-agent-as-a-service-a-senior-engineers-overview-fc759f5bbcfa"), highlighting key components like service-oriented architecture, API gateways, and centralized monitoring to ensure reliable and cost-effective AI agents in production environments.

### **Long Context RAG Performance of LLMs**

Read Time: 12 minutes



[This article]("https://www.databricks.com/blog/long-context-rag-performance-llms") explores the impact of increased context length on the performance of Retrieval Augmented Generation (RAG) systems, which leverage LLMs to enhance accuracy by retrieving relevant information. The authors ran over 2,000 experiments on 13 popular LLMs and found that while longer context can benefit RAG, most models suffer decreased performance after a certain context size. The article also analyzes unique failure patterns in long-context models, highlighting the need for further research to improve long-context capabilities.

### **Can Mixture of Experts (MoE) Models Push GenAI to the Next Level?**

Read time: 10 minutes



This article explores how Mixture of Experts (MoE) models, which use specialized submodels for different tasks, can help address the scalability, computational efficiency, and generalization challenges faced by modern Generative AI models. It highlights [MoE applications in language, vision, and recommendation systems]("https://pub.towardsai.net/can-mixture-of-experts-moe-models-push-genai-to-the-next-level-8951d2f85283"), and covers notable MoE models like Mistral Mixtral 8x7B, Switch Transformers, and V-MoE. The author believes that as GenAI continues to evolve, the role of MoE models will become crucial in pushing the boundaries of what's possible with AI.

##

## 🧰 **TOOLS**

### **LLM-Aided OCR: Enhancing Tesseract with Large Language Models**

Read time: 9 minutes

[The LLM-Aided OCR project]("https://github.com/Dicklesworthstone/llm_aided_ocr") is an advanced system that leverages LLMs to significantly enhance the accuracy of Optical Character Recognition (OCR) output. By combining Tesseract OCR with LLM-based error correction and formatting, the project transforms raw OCR text into high-quality, readable documents. This tool allows software developers to integrate powerful OCR capabilities into their applications, boosting productivity and access to digitized content.

### **RAG Foundry: A Framework for Enhancing LLMs for Retrieval Augmented Generation**

Read Time: 6 minutes



[RAG Foundry]("https://github.com/IntelLabs/RAGFoundry") is a framework that helps software developers improve LLM performance on retrieval-augmented generation (RAG) tasks. It provides tools for creating RAG-augmented datasets, training LLMs using parameter-efficient fine-tuning, and evaluating the models using RAG-specific metrics. The modular, configurable design enables easy experimentation with different RAG techniques, making it a valuable resource for developers looking to leverage LLMs in their applications.

### **OpenResearcher: Unleashing AI for Accelerated Scientific Research**

Read time: 8 minutes



[OpenResearcher]("https://github.com/GAIR-NLP/OpenResearcher") is an advanced Scientific Research Assistant that leverages the arXiv corpus to provide the latest scientific insights. This open-source tool supports various large language models, including those from OpenAI, Deepseek, and Hugging Face, enabling software developers to explore the frontiers of science and access cutting-edge research. The platform's strong performance in areas like correctness, richness, and relevance makes it a valuable resource for developers looking to incorporate Generative AI into their applications.

### **Introducing sqlite-vec v0.1.0: a vector search SQLite extension that runs everywhere**

Read time: 8 minutes

[sqlite-vec]("https://alexgarcia.xyz/blog/2024/sqlite-vec-stable-release/index.html") is a new, lightweight vector search extension for SQLite that runs on a variety of platforms, including the browser, mobile devices, and servers. The initial "stable" v0.1.0 release focuses on fast brute-force vector search, with support for quantization and Matryoshka embeddings to optimize storage and query performance. This article covers the key features, benchmarks, and roadmap for future versions, making sqlite-vec an attractive option for software developers looking to incorporate vector search into their applications.

### **postgres.new: In-browser Postgres with an AI Interface**

Read time: 9 minutes

[postgres.new]("https://supabase.com/blog/postgres-new") is an in-browser Postgres sandbox that pairs a WASM version of Postgres with a large language model. This enables AI-driven database development, allowing software developers to quickly import CSV data, generate reports and charts, and even build database diagrams—all within a disposable, browser-based environment. The article covers the technical details behind this innovative tool, highlighting its potential to revolutionize how developers interact with and leverage Postgres in their applications.

### **Transformer Explainer: LLM Transformer Model Visually Explained**

Read time: 10 minutes



[This interactive article]("https://poloclub.github.io/transformer-explainer/") provides a detailed, visual explanation of the Transformer architecture that powers large language models like GPT. It covers the core components, including embedding, attention, and output probabilities, with step-by-step illustrations and explorable demos. This resource is invaluable for software developers seeking to understand the inner workings of these powerful AI models and leverage them in their applications.

## 📰 **NEWS & EDITORIALS**

### **Why I bet on DSPy**

Read time: 8 minutes

[DSPy]("https://blog.isaacmiller.dev/posts/dspy") is an open-source framework that helps developers compose multiple LLM calls together to solve real-world problems. The article explains how DSPy forces developers to define clear success criteria and connect LLM outputs to verifiable feedback, rather than relying on unconstrained LLM "reasoning." It highlights DSPy's approach of using LLMs as creative engines and optimizing prompts based on measurable improvements, rather than treating LLMs as general reasoning systems. The article ultimately advocates for DSPy as a reliable tool for leveraging LLMs to tackle challenging problems.

### **350M Tokens Don't Lie: Love And Hate In Hacker News**

Read Time: 10 minutes



This article provides a [deep dive into the sentiment and topics discussed on Hacker News]("https://outerbounds.com/blog/hacker-news-sentiment/"), a popular online community for software developers. By analyzing over 350 million tokens from 100,000 posts and 230 million words of comments, the authors used large language models to uncover the Hacker News community's love for topics like programming, open source, and nostalgia, as well as their disdain for subjects like FTX, police misconduct, and cost-cutting. The authors also share their process, built on the open-source Metaflow framework, making this an insightful resource for developers interested in leveraging Generative AI for similar data analysis projects.

### **MIT Researchers Use Large Language Models to Flag Problems in Complex Systems**

Read Time: 9 minutes

Researchers at MIT have developed a framework called [SigLLM]("https://news.mit.edu/2024/researchers-use-large-language-models-to-flag-problems-0814") that leverages large language models (LLMs) to detect anomalies in time-series data, such as measurements from wind turbines or satellites. Unlike traditional deep learning approaches, SigLLM can be deployed "off-the-shelf" without the need for extensive training, making it a more efficient solution for technicians to identify potential problems in complex systems. While LLMs currently lag behind state-of-the-art deep learning models, the researchers are optimistic that further improvements could make LLM-based anomaly detection a "game-changer" for software developers working on complex monitoring and diagnostic applications.

### **Prompt Caching with Claude: Revolutionizing AI-Powered Applications**

Read time: 8 minutes



[Prompt caching with Anthropic's Claude AI]("https://www.anthropic.com/news/prompt-caching") enables developers to dramatically reduce costs and latency when using large language models. By caching frequently used context, Claude can deliver faster responses and save up to 90% on costs for use cases like conversational agents, coding assistants, and document processing. This public beta feature is now available for Claude 3.5 Sonnet and Claude 3 Haiku, with support for Claude 3 Opus coming soon.

### **Hermes 3: A New Frontier for Open-Source AI**

Read time: 6 minutes

[Hermes 3]("https://nousresearch.com/hermes3/") is a powerful open-source AI model developed by Nous Research. It boasts advanced capabilities like long-term context retention, multi-turn conversation, complex roleplaying, and enhanced agentic function-calling. Hermes 3 was created by fine-tuning the LLaMA 3.1 model, offering comparable and superior performance to the base model. This novel AI system encourages developers to experiment with individual-alignment, artificial consciousness, and decentralized technology in ways that traditional companies may be hesitant to explore.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
