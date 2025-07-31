---
title: Running Local LLMs with Ollama and Llama 2
author: Sam Keen
date: February 25, 2024
url: https://devthink.ai/p/running-local-llms-with-ollama-and-llama-2
scraped_at: 2025-07-29T19:25:51.344634
---

# Running Local LLMs with Ollama and Llama 2

*By Sam Keen on February 25, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Amazing week, quick on the heels of releasing Gemini Advanced, Google has release a pair of open source models based on Gemini. Additionally some great links on the advances of running models locally + the ever evolving strategies towards building RAG apps.



## 📖 **TUTORIALS & CASE STUDIES**

### LangChain 101: Deep Dive into Embeddings and Vectorstores



read time: 15 minutes  
Part 3 of the [LangChain 101 series]("https://pub.towardsai.net/langchain-101-part-3b-talking-to-documents-embeddings-and-vectorstores-c37d460f1519") provides a comprehensive guide on embeddings and vectorstores. It covers how to choose an embedding model, the role of vectorstores, and how to select one. The article also includes code implementations and discusses advanced vectorstore retrieval concepts.

### Running Local LLMs with Ollama and Llama 2

read time: 10 minutes  
This [article]("https://thenewstack.io/how-to-set-up-and-run-a-local-llm-with-ollama-and-llama-2/") explores the use of Ollama, a tool for running open-source Large Language Models (LLMs) locally. It provides a step-by-step guide on setting up and running Llama 2 model on a local machine, highlighting the benefits of local LLMs such as data privacy and cost-effectiveness. The author also demonstrates how to interact with the model using the built-in terminal and API, and shares insights on the model's performance.

### Building a Local RAG CLI Application with Orca and Rust



read time: 20 minutes  
This [article]("https://huggingface.co/blog/santiagomed/building-a-rag-cli-application-application") demonstrates how to build a local Retrieval-Augmented Generation (RAG) CLI application using Orca, a Rust-based LLM orchestration framework. The application generates BERT sentence embeddings and executes Mistral Instruct 7B text completions, all without an internet connection, making AI technologies more accessible and privacy-friendly.

### Supercharging If-Statements with Prompt Classification using Ollama and LangChain



read time: 10 minutes  
Andrew Nguonly introduces [Lumos]("https://blog.langchain.dev/supercharging-if-statements-with-prompt-classification-using-ollama-and-langchain/"), a Chrome extension that uses local Large Language Models (LLMs) to assist with web browsing tasks such as summarizing articles and extracting details from technical documentation. Lumos also includes a built-in calculator and uses Ollama for prompt classification, enabling it to determine when to use specific tools.

### Webinar: Building Production-Grade LLM Apps

read time: 1 hour course

[DeepLearning.AI]("http://DeepLearning.AI"), Pinecone, and TruEra are hosting a webinar (March 7th) on creating high-quality, production-ready LLM apps. The session will cover the principles of building enterprise-grade apps, rapid response strategies for app issues, and the use of Pinecone Canopy and TruLens. The event aims to help developers transition from prototype to production.

##

## 🧰 **TOOLS**

### Introducing LlamaCloud and LlamaParse: Next-Gen Tools for AI Engineers



read time: 15 minutes  
LlamaIndex has announced [LlamaCloud and LlamaParse]("https://blog.llamaindex.ai/introducing-llamacloud-and-llamaparse-af8cedf9006b"), new tools designed to simplify data parsing, ingestion, and retrieval for Retrieval-Augmented Generation (RAG) applications. LlamaParse, a state-of-the-art parser for complex PDFs, is now available in a public preview setting. LlamaCloud, a managed ingestion and retrieval API, is currently in private preview.

### OpenAI Batcher: Efficient Async Batch Requests to OpenAI API

read time: 5 minutes  
OpenAI Batcher (oaib) is a Python library designed to make rate-limited, async batch requests to the OpenAI API as efficient as possible. It offers two classes, Batch and Auto, for managing requests and automatically reading rate limits from OpenAI's response headers. The library also supports custom metadata and indexing for observations. Check out the [GitHub repository]("https://github.com/SpellcraftAI/oaib") for more details.

### Aya: A Global Initiative to Accelerate Multilingual AI

read time: 7 minutes  
Cohere For AI introduces [Aya]("https://txt.cohere.com/aya-multilingual/"), an open science project aimed at creating a state-of-the-art multilingual generative language model. The initiative seeks to address the disproportionate representation of languages in AI, inviting contributions from all over the world. Aya will be open-sourced, including models, training data, and data collection tools, fostering collaboration and democratizing access to language technology.

### Unraveling Byte Pair Encoding (BPE) for Tokenization in LLMs

read time: 8 minutes  
This repository from Andrej Karpathy provides an in-depth look at Byte Pair Encoding (BPE), a technique commonly used in Large Language Model (LLM) tokenization. Explore the provided code and commentary to understand the inner workings of BPE and learn how to train your own tokenizers. This will be particularly valuable if you want to implement BPE in your own NLP applications. Explore the [minbpe repository]("https://github.com/karpathy/minbpe") on GitHub.

### OpenLLMetry-JS: Open-source Observability for Your LLM Application



read time: 3 minutes  
Traceloop has released [OpenLLMetry-JS]("https://github.com/traceloop/openllmetry-js"), an open-source set of extensions for complete observability of your LLM application. It uses OpenTelemetry and supports various observability solutions. It also includes custom extensions for instrumenting calls to OpenAI, Anthropic, and Vector DBs like Pinecone, Chroma, and Weaviate.

## 📰 **NEWS & EDITORIALS**

### Google Introduces Gemma: State-of-the-Art Open Models



read time: 7 minutes  
Google has launched [Gemma]("https://blog.google/technology/developers/gemma-open-models/"), a new generation of lightweight, state-of-the-art open models. Available in two sizes, Gemma 2B and 7B, these models are optimized for multiple AI hardware platforms and come with a Responsible Generative AI Toolkit. They can be fine-tuned across major frameworks like JAX, PyTorch, and TensorFlow, and are designed for responsible and safe AI applications.

### Google's Gemini Advanced: A GPT-4 Contender or a Letdown?

read time: 15 minutes  
Google's Gemini Advanced, a chatbot likened to GPT-4, has received mixed reviews. While some, like Ethan Mollick, find it comparable to GPT-4, others express disappointment in its performance. The discrepancy may be due to different evaluation methods or biases. Read the full analysis [here]("https://open.substack.com/pub/thealgorithmicbridge/p/how-good-is-google-gemini-advanced").

### Understanding the Generative AI Landscape: Opportunities and Challenges

read time: 15 minutes  
This [article]("https://medium.com/@sanguit/how-to-lose-at-generative-ai-2e6e6c20fecf") discusses the challenges startups face in the Generative AI space, arguing that the field favors incumbents due to their data advantage and existing workflows. It also explores where startups can find success, such as in model-only and workflow+model plays, and the potential for a B2B Generative AI super-app.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/devthinkai"), DM me links you would like included in a future newsletters.
