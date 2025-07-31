---
title: Let's Create an Agentic Multimodal Chatbot from Scratch
author: Sam Keen
date: September 10, 2024
url: https://devthink.ai/p/lets-create-an-agentic-multimodal-chatbot-from-scratch
scraped_at: 2025-07-29T19:21:45.895848
---

# Let's Create an Agentic Multimodal Chatbot from Scratch

*By Sam Keen on September 10, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Welcome back, fellow developers! This week's edition is packed with insights that will empower you to harness the full potential of generative AI. From building LLMs from scratch to implementing secure Retrieval Augmented Generation (RAG) systems, we've got you covered. And don't miss the latest on cutting-edge tools like the open-source Reflection Llama-3.1 and the impressive Yi-Coder AI coding assistant. Dive in and elevate your development game!



## 📖 **TUTORIALS & CASE STUDIES**

### Building LLMs from the Ground Up: A 3-hour Coding Workshop

Read Time: 40 minutes

[This 3-hour coding workshop]("https://magazine.sebastianraschka.com/p/building-llms-from-the-ground-up") provides software developers a hands-on introduction to building LLMs from scratch. The workshop covers key topics like understanding LLM input data, coding an LLM architecture, pretraining, loading pretrained weights, and fine-tuning for instruction-following. Attendees will gain practical experience implementing core LLM components, equipping them to leverage these powerful AI tools in their own applications.

### **Llama3, LangGraph and Elasticsearch: Build a Local Agent for Vector Search**

Read Time: 9 minutes



[This article]("https://www.elastic.co/search-labs/blog/local-rag-agent-elasticsearch-langgraph-llama3") demonstrates how to build a reliable agent using LangGraph, LLaMA3, and Elasticsearch Vector Store. The agent combines ideas from advanced Retrieval-Augmented Generation (RAG) papers, including adaptive routing, fallback retrieval, and self-correction. The system is designed to be modular and scalable, with a predefined control flow that simplifies decision-making for the LLM. This enables the agent to provide high-quality, relevant answers to user queries by leveraging local resources and tools.

### **Unleash the Power of Generative AI in Customer Support with Amazon Bedrock**

Read Time: 8 minutes



[This Anthropic QuickStart guide]("https://github.com/anthropics/anthropic-quickstarts/tree/main/customer-support-agent") introduces a highly customizable customer support chat interface powered by Anthropic's Claude model and Amazon Bedrock' s knowledge retrieval. Key features include real-time thinking displays, user mood detection, and shadcn/ui-based UI customization. The guide covers setup, configuration, knowledge base creation, and deployment on AWS Amplify, making it a valuable resource for software developers looking to leverage generative AI in their customer support applications.

### **Secure RAG Applications using Prompt Engineering on Amazon Bedrock**

Read Time: 9 minutes

[This article]("https://aws.amazon.com/blogs/machine-learning/secure-rag-applications-using-prompt-engineering-on-amazon-bedrock/") introduces prompt engineering security guardrails to mitigate prompt-level threats in Retrieval Augmented Generation ( RAG) applications powered by large language models on Amazon Bedrock. It discusses common prompt threats like injection, leaking, and jailbreaking, and provides a comprehensive set of prompt template guidelines to secure RAG solutions, including the use of salted tags and threat detection instructions.

### **How to Implement Graph RAG Using Knowledge Graphs and Vector Databases**

Read time: 10 minutes



This article provides a step-by-step tutorial on [leveraging knowledge graphs and vector databases]("https://towardsdatascience.com/how-to-implement-graph-rag-using-knowledge-graphs-and-vector-databases-60bb69a22759") to implement Retrieval-Augmented Generation (RAG), a powerful technique for improving the accuracy and context of language model responses. The author demonstrates how to vectorize data into a vector database for semantic search and similarity, then use a knowledge graph to filter and refine the results, reducing the risk of "context poisoning." The article highlights the strengths and tradeoffs of each approach, showing how combining them can maximize the benefits of both.

### **Let's Create an Agentic Multimodal Chatbot from Scratch**

Read time: 13 minutes



This article guides software developers through the creation of an ["agentic multimodal chatbot"]("https://pub.towardsai.net/lets-create-an-agentic-multimodal-chatbot-from-scratch-7087e3ae8ace")—a powerful AI system that can understand, generate, and respond to text, images, and audio. The author walks through integrating a large language model (Gemma), a retrieval-augmented generation (RAG) system, and image/audio generation capabilities to build a highly capable conversational AI assistant. The article covers techniques like model quantization, prompt engineering, and multimodal data processing, providing a practical example of how developers can leverage the latest advancements in generative AI.

##

## 🧰 **TOOLS**

### **Reflection Llama-3.1 70B: The World's Top Open-Source LLM**

Read time: 8 minutes

[Reflection Llama-3.1 70B]("https://huggingface.co/mattshumer/Reflection-Llama-3.1-70B") is the latest version of an open-source LLM trained using a novel "Reflection-Tuning" technique. This model can detect and correct its own reasoning errors, making it a powerful tool for software developers looking to leverage advanced generative AI capabilities. The article provides benchmarks, system prompts, and tips for optimizing the model's performance.

### **Meet Yi-Coder: A Small but Mighty LLM for Code**

Read Time: 10 minutes



[Yi-Coder]("https://01-ai.github.io/blog.html?post=en%2F2024-09-05-A-Small-but-Mighty-LLM-for-Code.md&utm_source=devthink.ai&utm_medium=referral&utm_campaign=let-s-create-an-agentic-multimodal-chatbot-from-scratch"), a series of open-source code LLMs, delivers state-of-the-art coding performance with under 10 billion parameters. Despite its small size, Yi-Coder excels at tasks like competitive programming, code editing, and mathematical reasoning, outperforming larger models. The article highlights Yi-Coder's impressive benchmarking results and long-context modeling capabilities, making it a compelling option for software developers seeking powerful AI-powered coding assistance.

### **Chat with Your Codebase in 2 Commands**

Read Time: 6 minutes



[repo2vec]("https://github.com/Storia-AI/repo2vec") is an open-source tool that lets software developers chat with their codebase using a conversational AI interface. It indexes your code and GitHub issues, then allows you to query the codebase and get detailed, contextual responses. With options to run locally or use cloud-based embeddings and language models, repo2vec provides a powerful and customizable way for developers to quickly understand and integrate new codebases.

### **Lance v0.16.1 Feature Roundup**

Read Time: 9 minutes

[This article]("https://blog.lancedb.com/lance-v0-16-1-feature-roundup/") highlights the key new features in Lance v0.16.1, an open-source data management framework. Notable updates include version tagging for dataset versioning, optimized subcolumn updates, a new file format versioning API, and distributed APIs for scaling up ANN index creation. These improvements streamline data management, boost performance, and enable more efficient processing of large datasets - valuable capabilities for software developers building applications with generative AI.

### **LLM Compressor: Faster Inference with vLLM**

Read Time: 8 minutes



[Neural Magic's LLM Compressor]("https://neuralmagic.com/blog/llm-compressor-is-here-faster-inference-with-vllm/") is a unified library for creating compressed language models that enable faster inference with vLLM. It supports advanced compression techniques like weight and activation quantization, allowing developers to boost performance on Nvidia GPUs by up to 3x without compromising model accuracy. LLM Compressor integrates seamlessly with the open-source vLLM runtime, simplifying the deployment of optimized models.

### **An Open-Source RAG UI for Chatting with Your Documents**

Read time: 8 minutes



[Kotaemon]("https://github.com/Cinnamon/kotaemon") is an open-source Retrieval Augmented Generation (RAG) tool that provides a clean and customizable web UI for chatting with your documents. It supports both end-users and developers, offering features like multi-modal QA, complex reasoning, and configurable settings. Kotaemon also allows you to host your own document QA system, organize LLM and embedding models, and extend the UI to fit your specific needs. This project aims to make it easier for software developers to leverage generative AI in their applications.

## 📰 **NEWS & EDITORIALS**

### **AI Demands More Than Just Technical Skills From Developers**

Read Time: 8 minutes

The integration of AI into development environments is reigniting the debate around the [skills developers need to succeed]("https://thenewstack.io/ai-demands-more-than-just-technical-skills-from-developers/"). Employers now value "well-rounded" developers who can think critically, adapt, solve problems, and leverage AI assistants effectively. Key soft skills include reasoning, curiosity, creativity, and accountability. Developers must fully understand the problem and desired outcome before using GenAI tools, and treat them as collaborative partners, not just blindly following prompts.

### **Debate over "Open Source AI" Term Brings Push for Clear Definition**

Read Time: 9 minutes

The Open Source Initiative (OSI) is working to establish a [clear definition of "open source AI"]("https://arstechnica.com/information-technology/2024/08/debate-over-open-source-ai-term-brings-new-push-to-formalize-definition/") as some companies release AI models with usage restrictions while labeling them as "open source." The proposed definition emphasizes "four fundamental freedoms" for users, including the ability to use, study, modify, and share the AI system. By providing a benchmark for open source AI, the OSI aims to promote transparency, collaboration, and "permissionless innovation" in this fast-moving field.

### **AI Has Created a Battle Over Web Crawling**

Read time: 10 minutes

[This article]("https://spectrum.ieee.org/web-crawling") explores how the rise of generative AI has led many websites to restrict web crawlers through robots.txt, limiting the data available to train these models. The report finds that 25% of data from top websites has been revoked, shifting the training data towards lower-quality sources. The article discusses the implications for AI companies, synthetic data as a potential solution, and the need for new standards to allow creators to express their data preferences.

### **100M Token Context Windows**

Read time: 8 minutes

[This article]("https://magic.dev/blog/100m-token-context-windows") discusses Magic's progress on ultra-long context models that can reason on up to 100 million tokens of context during inference. These models could revolutionize code synthesis by providing developers access to an entire codebase, including private libraries, during code generation. The article also announces Magic's partnership with Google Cloud to build a powerful AI supercomputer and their recent $465M in funding to accelerate this research.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
