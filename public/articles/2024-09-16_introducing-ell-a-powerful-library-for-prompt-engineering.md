---
title: A Simple Framework for RAG Enhanced Visual Question Answering
author: Sam Keen
date: September 16, 2024
url: https://devthink.ai/p/introducing-ell-a-powerful-library-for-prompt-engineering
scraped_at: 2025-07-29T19:21:37.938742
---

# A Simple Framework for RAG Enhanced Visual Question Answering

*By Sam Keen on September 16, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thanks for being a loyal subscriber to our newsletter! This week, we've curated some truly engaging content that I think you'll find immensely valuable. From a deep dive into Retrieval Augmented Generation pipelines to an introduction to OpenAI's new Structured Outputs feature, there's a wealth of practical knowledge to help you leverage the latest advancements in generative AI. We've also highlighted some intriguing tools like ell and Reader-LM that can streamline your prompt engineering and content conversion workflows. Dive in and discover how these insights can elevate your

AI-powered applications.



## 📖 **TUTORIALS & CASE STUDIES**

### **Building a RAG Batch Inference Pipeline with Anyscale and Union**

Read time: 15 minutes



This article demonstrates how to build a [RAG batch inference pipeline using Anyscale and Union]("https://www.anyscale.com/blog/anyscale-union-batch-inference-pipeline"). It showcases embedding generation and LLM batch inference with Ray, Flyte's pipeline orchestrator, and Anyscale's model serving platform. The pipeline retrieves relevant context from a vector database to enhance LLM responses, making it ideal for applications like a GitHub issue-answering chatbot.

### **Getting Started With OpenAI Structured Outputs**

Read Time: 9 minutes

[This article]("https://www.datacamp.com/tutorial/open-ai-structured-outputs") introduces OpenAI's new Structured Outputs feature, which allows developers to enforce a specific output format for their LLM-powered applications. By defining Pydantic models, developers can ensure responses conform to a rigid schema, simplifying integration with downstream systems. The article covers practical examples, best practices, and the benefits of using Structured Outputs, particularly when leveraging OpenAI's function calling capabilities.

### **AWS AI Stack: A Serverless Framework for Building AI Applications on AWS**

Read Time: 15 minutes



[AWS AI Stack]("https://github.com/serverless/aws-ai-stack") is a full-stack boilerplate project for building serverless AI applications on AWS. It provides a ready-to-use architecture featuring a React frontend, API Gateway, Lambda, DynamoDB, and AWS Bedrock for integrating large language models (LLMs) while keeping data private. The project demonstrates best practices for serverless development, including custom domains, CI/CD, authentication, and a domain-oriented design. This framework enables software developers to quickly leverage the power of AI in their applications.

### **A Simple Framework for RAG Enhanced Visual Question Answering**

Read Time: 9 minutes



This article introduces a framework for enhancing Visual Question Answering using Retrieval Augmented Generation (RAG), which allows [the Phi-3.5-vision model]("https://towardsdatascience.com/a-simple-framework-for-rag-enhanced-visual-question-answering-06768094762e") to leverage Wikipedia knowledge. The framework generates a query tailored to the image and question, then retrieves relevant passages to improve the accuracy and reliability of the model's answers. The author provides a practical implementation and discusses the benefits and limitations of this RAG-powered approach for multimodal AI assistants.

### **Python QuickStart for People Learning AI**

Read time: 10 minutes

This beginner-friendly guide introduces Python fundamentals like data types, variables, loops, and functions - essential tools for software developers building AI-powered applications. It then walks through an example of using Python and OpenAI's API to create a research paper summarizer and keyword extractor, demonstrating how to leverage [Towards Data Science's Python QuickStart]("https://towardsdatascience.com/python-quickstart-for-people-learning-ai-58a1b76df0f4") for your own AI projects.

##

## 🧰 **TOOLS**

### **Introducing ell: A Powerful Library for Prompt Engineering**

Read time: 8 minutes

[ell]("https://docs.ell.so/") is a prompt engineering library that treats prompts as functions, not just strings. This allows software developers to leverage powerful tools for monitoring, versioning, and visualizing their prompt engineering efforts. ell supports multimodal inputs and outputs, making it easier to work with language models that generate text, images, audio, and more. By focusing on simplicity and non-interference with existing workflows, ell helps developers seamlessly integrate advanced prompt engineering techniques into their applications.

### **Reader-LM: Small Language Models for Cleaning and Converting HTML to Markdown**

Read time: 9 minutes



[Reader-LM]("https://jina.ai/news/reader-lm-small-language-models-for-cleaning-and-converting-html-to-markdown/") is a novel small language model (SLM) developed by Jina AI to convert raw, noisy HTML into clean Markdown. Unlike larger LLMs, Reader-LM is designed to be cost-effective and practical, with models ranging from 0.5B to 1.5B parameters. The article details the challenges faced in training these SLMs for long-context, "selective-copy" tasks, and how Jina AI overcame them to create a state-of-the-art solution for software developers needing to leverage generative AI tools.

### **Mistral Releases Pixtral 12B, Its First Multimodal Model**

Read Time: 7 minutes



[Mistral, a French AI startup, has released Pixtral 12B, its first multimodal model that can process both images and text]("https://techcrunch.com/2024/09/11/mistral-releases-pixtral-its-first-multimodal-model/"). Built on Mistral's existing text model, Pixtral 12B can perform tasks like image captioning and object counting. The model is being made available on open-source platforms, aligning with Mistral's strategy of releasing free "open" models and providing managed versions and consulting services to corporate customers.

### **Optimizing Inference Proxy for Large Language Models**

Read Time: 9 minutes

[The optillm project]("https://github.com/codelion/optillm") is an OpenAI API-compatible proxy that implements state-of-the-art techniques to improve the accuracy and performance of LLMs. It includes approaches like Monte Carlo Tree Search, Mixture of Agents, and Round Trip Optimization that can beat the frontier models on a variety of coding, logical, and mathematical tasks. The proxy allows software developers to leverage these advanced inference optimization techniques in their applications.

### **Composio: Equipping AI Agents with Integrated Tools**

Read time: 7 minutes



[Composio]("https://github.com/ComposioHQ/composio") is a production-ready toolset that equips AI agents and LLMs with over 100 high-quality integrations, including tools for software development, search, and retrieval-augmented generation. It provides a single line of code to access pre-configured tools, manage authentication, and improve agentic accuracy up to 40%. Composio is designed to be easily extended and embedded in applications, making it a valuable resource for software developers building AI-powered solutions.

### **Replit Agent: An AI-Powered Tool to Streamline Software Development**

Read time: 7 minutes

[Replit Agent]("https://docs.replit.com/replitai/agent") is an experimental AI-powered tool that helps software developers build applications more efficiently. It can understand natural language prompts and assist in creating web-based applications from scratch, making development more accessible. Replit Core and Teams subscribers can explore the agent's capabilities, which include prototyping, progress tracking, and deployment support, within a limited early access program.

## 📰 **NEWS & EDITORIALS**

### **Introducing OpenAI o1: A New Series of Powerful Reasoning Models**

Read time: 8 minutes



[OpenAI has released a new series of AI models called o1]("https://openai.com/index/introducing-openai-o1-preview/") that can reason through complex tasks in science, coding, and math, outperforming previous models. These models, including o1-preview and the more efficient o1-mini, are available in ChatGPT and the OpenAI API, offering software developers powerful tools to enhance their applications with advanced reasoning capabilities.

### **Why Cursor is Ahead of the Curve**

Read time: 7 minutes

[Cursor]("https://analyticsindiamag.com/ai-insights-analysis/why-cursor-is-ahead-of-the-curve/"), a code editor backed by Andreessen Horowitz, is gaining popularity among software developers due to its advanced features and AI-powered capabilities that outshine GitHub Copilot. Cursor's deeper IDE integration, personalized suggestions, and flexible pricing options make it a more compelling option for developers seeking an efficient coding assistant that can boost their productivity.

### **Why Open Source AI Has No Meaning**

Read Time: 9 minutes

The open source community struggles to define "open source AI" as major tech companies like Meta exploit the term for their own purposes. The article explores the lack of stewardship over the language of open source, the tension between pragmatic and aspirational approaches, and the complexity of issues like training data transparency. The author concludes that open source AI has become diminished in meaning, undermining the principles that have made open source software so successful. Read more at: [Why Open Source AI Has No Meaning]("https://thenewstack.io/why-open-source-ai-has-no-meaning/")

### **In Defense of the Small Language Model**

Read Time: 5 minutes



[This article]("https://octo.ai/blog/in-defense-of-the-small-language-model/") argues that smaller, more efficient language models can be just as capable as larger models for many applications. It emphasizes the importance of model size optimization, citing examples of how smaller models can achieve comparable performance to their larger counterparts. The article suggests that software developers should consider leveraging smaller, more efficient models in their Retrieval Augmented Generation or Agent-based systems to reduce computational costs and carbon footprint without sacrificing model capabilities.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
