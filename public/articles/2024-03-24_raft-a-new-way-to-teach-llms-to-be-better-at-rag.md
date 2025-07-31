---
title: RAFT: A new way to teach LLMs to be better at RAG
author: Sam Keen
date: March 24, 2024
url: https://devthink.ai/p/raft-a-new-way-to-teach-llms-to-be-better-at-rag
scraped_at: 2025-07-29T19:25:12.210960
---

# RAFT: A new way to teach LLMs to be better at RAG

*By Sam Keen on March 24, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

In this edition there are some interesting applications of LLMs such as fuzz test generators and prompt generation and testing. Enjoy!



## 📖 **TUTORIALS & CASE STUDIES**

### AutoDev: A Framework for Autonomous Software Engineering



read time: 12 minutes  
AutoDev is a framework that enables AI agents to autonomously perform software engineering tasks such as code editing, testing, and integration. It provides a comprehensive set of tools and allows for multi-agent collaboration. The evaluation results show promising performance in code and test generation tasks. Read more [here]("https://arxiv.org/html/2403.08299v1").

### The Rise of GPT-4 Class Models: A Comparative Analysis

read time: 15 minutes  
The AI landscape has evolved with three GPT-4 class models, namely GPT-4, Anthropic’s Claude 3 Opus, and Google’s Gemini Advanced1, each powering their own chatbots. While they have different strengths and personalities, they share similarities like the illusion of human-like interaction and multimodal capabilities. The article also highlights emerging features like context windows and agents that extend the capabilities of these models. Read more about these developments in the full [article]("https://www.oneusefulthing.org/p/which-ai-should-i-use-superpowers").

### Efficiently Serving Large Language Models: A Short Course

read time: 1 hr course  
[DeepLearning.AI]("http://DeepLearning.AI") offers a [short course](https://www.deeplearning.ai/short-courses/efficiently-serving-llms/"https://www.deeplearning.ai/short-courses/efficiently-serving-llms/") on efficiently serving Large Language Models (LLMs). The course covers key techniques like KV caching and Low Rank Adapters (LoRA), and explores how to balance performance trade-offs in LLM applications. Ideal for those looking to enhance their understanding of LLM servers and improve the efficiency of their LLM-powered applications.

### RAFT: Revolutionizing LLMs with Retrieval-Augmented Fine-Tuning



read time: 10 minutes  
UC Berkeley researchers have introduced [RAFT]("https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674"), a new approach that combines Retrieval-Augmented Generation and Fine-Tuning for improved domain adaptation in Large Language Models. The method enhances the model's ability to answer domain-specific queries, making it more effective for niche areas like healthcare or legal datasets.

### LLMs: RAG vs. Fine-Tuning - A Deep Dive

read time: 20 minutes  
Dr. Phil Winder explores the differences between Retrieval Augmented Generation (RAG) and fine-tuning in Large Language Models (LLMs) in this comprehensive [presentation]("https://winder.ai/llms-rag-fine-tuning/"). He discusses how each approach ingests knowledge, their applications, and their limitations. The article concludes with recommendations on when to use each method, emphasizing the importance of the specific use case.

##

## 🧰 **TOOLS**

### Exploring the Use of Large Language Models for Fuzzing

read time: 15 minutes  
This [article]("https://verse.systems/blog/post/2024-03-09-using-llms-to-generate-fuzz-generators/") explores the potential of Large Language Models (LLMs) in generating fuzzers for code testing. The author discusses an experiment where an LLM, Claude, successfully created a fuzzer for GIF parsing code, revealing its potential in automating time-consuming tasks. The article also discusses the limitations of LLMs in static analysis and suggests a combined approach for future exploration.

### MusicLang: Advanced Control Over Music Generation

read time: 8 minutes  
MusicLang, a tool for advanced control over music generation, allows developers to manipulate symbolic music. It offers features like controlling chord progression, generating music from existing templates, and more. The tool is based on the LLAMA2 architecture and is trained on a large dataset of MIDI files. Learn more about it [here]("https://github.com/MusicLang/musiclang_predict").

### Supercharge Your AI with gpt-prompt-engineer



read time: 10 minutes  
The [gpt-prompt-engineer]("https://github.com/mshumer/gpt-prompt-engineer") tool enhances AI prompt generation and testing. It uses models like GPT-4, GPT-3.5-Turbo, and Claude 3 Opus to generate prompts based on a use-case and test cases. The tool then tests and ranks prompts using an ELO rating system. It also includes versions for classification tasks and for use with Anthropic's Claude 3 Opus model.

### LlamaGym: Simplifying Fine-Tuning of LLM Agents with RL



read time: 5 minutes  
[LlamaGym]("https://github.com/KhoomeiK/LlamaGym") simplifies the fine-tuning of Large Language Model (LLM) agents with reinforcement learning (RL). It provides an abstract class that handles LLM conversation context, episode batches, reward assignment, and more, allowing developers to quickly experiment with agent prompting and hyperparameters across any Gym environment.

## 📰 **NEWS & EDITORIALS**

### Nvidia's New Blackwell B200 GPU and GB200 Superchip: A Leap in AI Performance

read time: 8 minutes  
Nvidia has unveiled the [Blackwell B200 GPU and GB200 superchip]("https://www.theverge.com/2024/3/18/24105157/nvidia-blackwell-gpu-b200-ai"), promising up to 20 petaflops of FP4 horsepower and 30 times the performance for LLM inference workloads. The new chips are expected to significantly reduce cost and energy consumption, and offer enhanced training speed. Major tech companies like Amazon, Google, Microsoft, and Oracle are planning to incorporate these in their cloud services.

### Grok-1: xAI's Open-Sourced Large Language Model

read time: 3 minutes  
xAI has released the base model weights and network architecture of [Grok-1]("https://x.ai/blog/grok-os"), a 314 billion parameter Mixture-of-Experts model. This raw base model, trained from scratch, is not fine-tuned for any specific application. The model is available under the Apache 2.0 license.

### Cohere's Command-R and Aya Models to be Hosted on NVIDIA's API Catalog

read time: 4 minutes  
Cohere's Command-R, a generative AI model for business use, and Aya, an open-source LLM covering 101 languages, will be hosted on [NVIDIA's API catalog]("https://txt.cohere.com/cohere-launch-nvidia/"). The models will be optimized to run on NVIDIA NIM microservices, accelerating the deployment of generative AI models across various platforms.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/devthinkai"), DM me links you would like included in a future newsletters.
