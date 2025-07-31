---
title: Building Agentic RAG with LlamaIndex
author: Sam Keen
date: May 13, 2024
url: https://devthink.ai/p/building-agentic-rag-with-llamaindex
scraped_at: 2025-07-29T19:24:13.340761
---

# Building Agentic RAG with LlamaIndex

*By Sam Keen on May 13, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thank you for being a loyal subscriber to our newsletter! This week, we have an incredible lineup of content that I'm sure you'll find immensely valuable. Dive into our tutorials on building intelligent Retrieval Augmented Generation (RAG) systems, learn how to easily run large language models (LLMs) locally, and explore the latest developments in AI-powered coding tools like GitHub Copilot Workspace. Don't miss our insights on the evolving world of generative AI – this is a must-read issue you won't want to miss!



## 📖 **TUTORIALS & CASE STUDIES**

### **Building Agentic RAG with LlamaIndex**

Read time: 9 minutes

This [short course]("https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex") teaches software developers how to build an intelligent "agentic" Retrieval Augmented Generation (RAG) system using the LlamaIndex framework. Developers will learn to create a versatile research agent that can reason over documents, answer complex questions, and handle multi-document scenarios. The course covers building a router agent, adding tool-calling capabilities, and developing a fully autonomous research assistant agent - equipping developers with powerful AI-powered data analysis and decision-making capabilities.

### **Ollama Tutorial: Running LLMs Locally Made Super Simple**



Read time: 8 minutes

[This article]("https://www.kdnuggets.com/ollama-tutorial-running-llms-locally-made-super-simple") introduces Ollama, a platform that simplifies local development with open-source large language models (LLMs). It provides a step-by-step guide on downloading Ollama, obtaining LLM models, and running them locally, including customizing model behavior with system prompts and integrating Ollama with Python using the official library or LangChain. This tutorial empowers software developers to easily experiment with and leverage LLMs in their applications, staying competitive in the evolving AI landscape.

### **Routing in RAG-Driven Applications**



Read Time: 8 minutes

This article explores the importance of routing in Retrieval Augmented Generation (RAG) applications, where the flow of a user's query is directed to the appropriate data sources and processing components. It discusses various types of natural language routers, such as LLM Completion Routers, LLM Function Calling Routers, Semantic Routers, and Zero Shot Classification Routers, which can help create more powerful and useful RAG applications. The author also compares routers to agents, highlighting their similarities and differences. By understanding these routing concepts, software developers can leverage [generative AI tools]("https://towardsdatascience.com/routing-in-rag-driven-applications-a685460a7220") to build more robust and flexible applications.

### **How LLMs Work, Explained Without Math**

Read Time: 12 minutes

[This article]("https://blog.miguelgrinberg.com/post/how-llms-work-explained-without-math") provides a high-level, non-technical explanation of how Large Language Models (LLMs) work, focusing on the core concepts of tokens, next token prediction, and text generation. It discusses the training process, the limitations of simple Markov chain approaches, and the evolution to neural networks and transformer architectures. While the author notes LLMs do not yet display true intelligence, they demonstrate the sophisticated ability to generate text by stitching together patterns learned from training data. This overview equips software developers with a foundational understanding of the mechanics behind these increasingly important generative AI tools.

### **RAG Development with Pinecone Serverless**

Read Time: 13 minutes

This article provides a step-by-step guide for software developers on building Retrieval Augmented Generation (RAG) applications using Pinecone's serverless vector database, OpenAI, and LangChain. It covers key steps like reading and chunking text data, generating embeddings, storing vectors and metadata in Pinecone, querying the database, and leveraging a Large Language Model to generate high-quality responses. The author highlights Pinecone's advantages for RAG development and offers code samples to help readers quickly set up and deploy their own RAG applications. [This guide]("https://3rdson.hashnode.dev/step-by-step-guide-to-developing-rag-applications-with-pinecone-serverless-openai-langchain-and-python") is a valuable resource for software developers looking to incorporate generative AI capabilities into their projects.

##

## 🧰 **TOOLS**

### **A Framework to Detect Hallucinations in the Text Generated by LLMs**



Read Time: 7 minutes

Researchers have developed [KnowHalu]("https://techxplore.com/news/2024-05-framework-hallucinations-text-generated-llms.html"), a novel framework to detect hallucinations in the text generated by large language models (LLMs). KnowHalu employs a two-phase process to identify both fabricated and non-fabricated hallucinations, utilizing multi-form knowledge-based fact checking to assess the accuracy and relevance of LLM outputs. This framework could help improve the reliability of LLMs and enable their broader real-world application in software development tasks.

### **The Next Big Programming Language Is English**



Read time: 9 minutes

[GitHub Copilot Workspace]("https://every.to/chain-of-thought/i-spent-24-hours-with-github-copilot-workspaces") is a powerful AI-powered tool that allows software developers to code in plain English, automating the process of writing, testing, and implementing code. While still in technical preview, this "agent" system represents the future of programming, where natural language interfaces will become the norm for building applications. The article explores the capabilities and limitations of Copilot Workspace, highlighting its potential to speed up common development tasks and the importance of understanding its strengths and weaknesses as a "model manager" for such AI-powered programming tools.

### **LeRobot: State-of-the-art Machine Learning for Real-World Robotics in Pytorch**



Read Time: 8 minutes

[LeRobot]("https://github.com/huggingface/lerobot") is an open-source library that provides models, datasets, and tools for leveraging state-of-the-art machine learning techniques in real-world robotics projects. Aimed at software developers, LeRobot offers pretrained models, simulation environments, and integration with popular frameworks like Weights and Biases, allowing users to quickly build and evaluate robotics applications. The library includes support for imitation learning, reinforcement learning, and other cutting-edge approaches, making it a valuable resource for staying competitive in the evolving field of robotics and generative AI.

## 📰 **NEWS & EDITORIALS**

### **5 Lessons From LinkedIn's First Foray Into GenAI Development**

Read Time: 8 minutes

This article shares key learnings from LinkedIn's experience building generative AI (GenAI) features, including the importance of managing expectations, leveraging Retrieval Augmented Generation (RAG) to enhance LLM capabilities, and the challenges of evaluating subjective GenAI outputs. It also emphasizes the trade-offs between latency and accuracy when deploying GenAI in production applications. [These insights]("https://thenewstack.io/5-lessons-from-linkedins-first-foray-into-genai-development/") can help software developers navigate the complexities of incorporating GenAI into their own tools and applications.

### **IBM Releases Open-Source Granite Code Models, Outperforming Llama 3**

Read Time: 5 minutes

IBM has released four powerful open-source Granite code models, ranging from 3 to 34 billion parameters, that outperform models like Llama 3 in code generation, debugging, and other key tasks. These models, trained on 500 million lines of code across 50+ languages, help developers write, test, and ship reliable software more efficiently. The [Granite code models]("https://analyticsindiamag.com/ibm-releases-open-source-granite-code-models-outperforms-llama-3/") are available on Hugging Face, GitHub, and other platforms for software developers to leverage in their applications.

### **Llama 3 vs. GPT-4: The Open-Source Showdown**

Read Time: 12 minutes

This article provides an in-depth comparison of the open-source [Llama 3]("https://myscale.com/blog/llama-3-vs-gpt-4/") and the proprietary GPT-4 AI models. While GPT-4 outperforms Llama 3 on some metrics, Llama 3's open-source nature enables collaboration, transparency, and broader experimentation. The article also highlights MyScaleDB, a scalable vector database designed for AI applications that offers free storage to new users.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/samkeen"), DM me links you would like included in a future newsletters.
