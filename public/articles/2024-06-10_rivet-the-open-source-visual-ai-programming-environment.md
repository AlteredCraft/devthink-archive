---
title: Rivet: The Open-Source Visual AI Programming Environment
author: Sam Keen
date: June 10, 2024
url: https://devthink.ai/p/rivet-the-open-source-visual-ai-programming-environment
scraped_at: 2025-07-29T19:23:39.920986
---

# Rivet: The Open-Source Visual AI Programming Environment

*By Sam Keen on June 10, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Greetings, fellow software developers! We've packed this week's newsletter with a treasure trove of content that is sure to captivate your interest. From tutorials on leveraging large language models and Retrieval Augmented Generation techniques, to the latest open-source tools and AI coding assistants, this edition is brimming with insights and practical advice to help you stay ahead of the curve. I'm especially excited to share the news on Nvidia's cutting-edge AI chatbot and AMD's new AI chips. Dive in and let's explore the future of generative AI together!



## 📖 **TUTORIALS & CASE STUDIES**

### **Training Python Code with an LLM**

Read time: 7 minutes



This article describes a novel approach to using a LLMs to [automatically generate a Python script]("https://github.com/run-llama/gmail-extractor") for categorizing emails and extracting travel destinations from flight itineraries. The author demonstrates how the LLM can progressively improve the detection function by training it on a subset of emails, rather than running the LLM on every email. This optimized approach saves on token usage and costs. The author also discusses plans to further improve the system, such as using a local model and refining the email search to focus on actual itineraries.

### **LLM Models and RAG Hands-on Guide (very detailed)**

Read time: 15 minutes

This guide provides a [comprehensive introduction]("https://github.com/zahaby/intro-llm-rag?tab=readme-ov-file&utm_source=devthink.ai&utm_medium=referral&utm_campaign=rivet-the-open-source-visual-ai-programming-environment") to building conversational AI systems using LLMs and Retrieval-Augmented Generation (RAG) techniques. It covers the fundamentals of LLMs, transformers, prompt engineering, embeddings, vector stores, and more, combining theoretical knowledge with practical code implementations. The guide also includes hands-on examples demonstrating the use of LangChain for deploying a conversational agent and integrating it with Google Calendar.

### **Running a LLM Locally with Ubuntu**

Read time: 10 minutes

[This article]("https://www.jeremymorgan.com/blog/generative-ai/local-llm-ubuntu/") demonstrates how software developers can set up and run a large language model (LLM) like the 8-billion-parameter Llama3 model locally on an Ubuntu machine. It covers installing the Ollama tool, downloading models, accessing the API via CURL and Python, and setting up a web interface using the Open WebUI. This allows developers to experiment with and integrate LLMs into their applications without relying on cloud-hosted services.

### **Fine-Tuning LLM Models Course**

3 hour video course



This comprehensive course from freeCodeCamp teaches software developers how to fine-tune large language models (LLMs) using techniques like QLORA, LORA, and quantization. You'll learn to optimize LLM performance and efficiency for specific tasks, leveraging frameworks like LLama2 and Google Gemma. The course covers practical steps for fine-tuning models with your own data, empowering developers to integrate advanced AI capabilities into their applications. [Learn more]("https://www.freecodecamp.org/news/fine-tuning-llm-models-course/")

### **5 Essential Free Tools for Getting Started with LLMs**

Read Time: 8 minutes

This article introduces [5 powerful and free tools]("https://machinelearningmastery.com/5-essential-free-tools-getting-started-llms/") to help software developers leverage Large Language Models (LLMs) in their applications: Transformers, LlamaIndex, Langchain, Ollama, and Llamafile. These tools simplify working with LLMs by providing intuitive APIs, pre-trained models, and streamlined integration with various data sources - enabling developers to quickly build intelligent, data-driven applications using the latest advancements in generative AI.

##

## 🧰 **TOOLS**

### **An Entirely Open-Source AI Code Assistant Inside Your Editor**

Read time: 10 minutes



[This article]("https://ollama.com/blog/continue-code-assistant") covers how software developers can leverage the Continue open-source AI code assistant and the Ollama open-source LLM platform to build powerful in-editor coding experiences. It provides step-by-step instructions for setting up Continue and Ollama, and explores using pre-trained models like Codestral and Llama 3 for autocomplete and chat. The article also discusses fine-tuning models on development data and integrating codebase and documentation context, demonstrating how developers can build customized, locally-hosted AI assistants.

### **Introducing the Property Graph Index: A Powerful New Way to Build Knowledge Graphs with LLMs**

Read time: 11 minutes



[This article]("https://www.llamaindex.ai/blog/introducing-the-property-graph-index-a-powerful-new-way-to-build-knowledge-graphs-with-llms") announces a new feature in LlamaIndex that expands its knowledge graph capabilities. The Property Graph Index offers a more flexible and expressive way to build knowledge graphs with LLMs, allowing you to categorize nodes, perform hybrid search, and execute complex Cypher queries. The article covers different extraction methods, querying techniques, and the underlying property graph store, providing a comprehensive overview for developers interested in leveraging advanced knowledge graph capabilities in their applications.

### **Vision Utilities for Web Interaction Agents**

Read time: 6 minutes

[Tarsier]("https://github.com/reworkd/tarsier") is a powerful vision utility library that helps web interaction agents understand and navigate webpages. It provides solutions for feeding webpage content to language models, mapping model responses back to web elements, and informing text-only models about a page's visual structure. Tarsier's OCR capabilities and tagging system enable unimodal LLMs to outperform vision-language models in web automation tasks, making it a valuable tool for software developers building generative AI-powered web agents.

### **Large Action Model framework to develop AI Web Agents**

Read time: 8 minutes

[LaVague]("https://github.com/lavague-ai/LaVague") is an open-source framework for building AI web agents that can autonomously complete complex tasks on the web, such as following a tutorial or navigating a website. LaVague uses a World Model to transform objectives into actionable steps, and an Action Engine to execute those steps using tools like Selenium or Playwright. With LaVague, software developers can create powerful web automation agents to boost productivity and explore new AI-driven web interactions.

### **Rivet: The Open-Source Visual AI Programming Environment**

Read time: 8 minutes



[Rivet]("https://rivet.ironcladapp.com/") is a visual programming environment for building AI agents with large language models (LLMs). It allows software developers to visualize, build, debug, and collaborate on complex LLM prompt graphs, and deploy them directly in their applications. Rivet is built and used by Ironclad, a leading digital contracting platform, and enables teams to iterate on and deploy AI-powered experiences more effectively.

### **My Tailor is Mistral: Customizing Generative AI with Mistral's New Fine-Tuning Solutions**

Read time: 6 minutes

[Mistral AI introduces powerful fine-tuning capabilities]("https://mistral.ai/news/customization/") to help software developers easily and cost-effectively customize their AI applications. The article covers Mistral's open-source fine-tuning SDK, serverless fine-tuning services, and custom training options - enabling developers to tailor Mistral models to their specific needs for improved performance, speed, and editorial control.

## 📰 **NEWS & EDITORIALS**

### **Nvidia's G-Assist: An AI Chatbot for Game Assistance and PC Optimization**

Read time: 9 minutes



[Nvidia's G-Assist]("https://www.theverge.com/2024/6/2/24169567/nvidias-g-assist-geforce-ai-assistant-chatbot") is a powerful AI assistant that can guide players through PC games, recommend optimal settings, and even overclock hardware. Showcased as a tech demo, G-Assist responds to voice queries, understands on-screen gameplay, and provides tailored advice to help developers and RTX GPU owners get the most out of their gaming experience.

### **New AI Coding Assistant AutoCoder Beats GPT-4o in Benchmarks**

Read time: 8 minutes

[AutoCoder]("https://favtutor.com/articles/new-autocoder-llm-beats-gpt-4o/"), a new open-source AI coding assistant, has surpassed GPT-4 Turbo and GPT-4o in coding benchmarks. AutoCoder uses a novel AIEV-Instruct architecture to automatically install dependencies and execute code, making it a powerful tool for software developers. With exceptional performance in Java, C++, and Rust, AutoCoder demonstrates the potential of generative AI to revolutionize coding tasks.

### **AMD Unveils New AI Chips to Compete with Nvidia**

Read Time: 7 minutes

[AMD has unveiled a new line of AI chips]("https://www.fastcompany.com/91134766/amd-unveils-new-ai-chips-to-compete-with-nvidia") to compete with Nvidia in the lucrative AI hardware market. The new Instinct MI300 chips are designed to accelerate AI training and inference, offering a competitive alternative to Nvidia's GPUs for software developers building AI-powered applications. This development is significant as it introduces more choice and competition in the AI hardware space, potentially driving innovation and lower costs for developers.

### **Scale AI Publishes First LLM Leaderboards Ranking AI Models**

Read time: 8 minutes



[Scale AI has published its first SEAL Leaderboards]("https://siliconangle.com/2024/05/29/scale-ai-publishes-first-llm-leaderboards-ranking-performance-ai-models-specific-domains/"), a new ranking system that evaluates frontier large language models on capabilities like generative coding, instruction following, math, and multilingualism. The leaderboards show OpenAI's GPT models leading in multiple domains, with Anthropic's Claude 3 Opus and Google's Gemini models also performing well. This provides valuable insights for software developers looking to leverage the latest AI tools and models.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/samkeen"), DM me links you would like included in a future newsletters.
