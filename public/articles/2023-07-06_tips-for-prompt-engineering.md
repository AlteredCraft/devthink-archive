---
title: 🔍 Focus on the importance of prompting with LLMs
author: Unknown
date: July 06, 2023
url: https://devthink.ai/p/tips-for-prompt-engineering
scraped_at: 2025-07-29T19:29:58.683803
---

# 🔍 Focus on the importance of prompting with LLMs

*By Unknown on July 06, 2023*

---

### **Essential AI Topics for Software Devs,** **Minus the Hype**

## This edition

- 🔍 Focus on the importance of **prompting** with LLMs
- Curated collection of tools, trends, and news relevant to Software Developers
- Hand picked list of resources for leaning more about Generative AI concepts important to the software dev.

## The prompt



In the world of Large Language Models (LLMs), understanding the prompt is crucial. A great deal of the AI products we see out there are just thin facades over an LLM and a well crafted prompt.

### Tips for effective prompting

**1) Give the model examples of what’s expected**

Zero-shot, one-shot, and few-shot prompting can be used to guide an LLM in generating desired outputs for various tasks. In general, it is a good idea to be as precise as possible when building a prompt. This will help to ensure that the language model generates output that is what you were expecting.

0️⃣ **zero-shot** prompt

Prompt:  
*Write a poem about a beautiful and majestic animal.*

This prompt does not give the LLM any examples of animal poems, but it does provide instructions on what kind of poem to write. The LLM can use its knowledge of the world and of animals to generate a poem that meets these instructions.

1️⃣ **one-shot** prompt

Prompt:  
*Here is an example of an animal poem:*

*The lion is king of the jungle, With a mane of golden fur. He is strong and fierce, And his roar can be heard for miles.*

*Write another animal poem that is similar to this one.*

This prompt gives the LLM one example of an animal poem to work from. The LLM can use this example to generate a new poem that is similar in style and content.

🔢 **few-shot** prompt

Prompt:  
*Here are three examples of animal poems:*

- *The lion is king of the jungle, With a mane of golden fur. He is strong and fierce, And his roar can be heard for miles.*
- *The elephant is the largest land animal, With a trunk that can lift up to 6,000 pounds. He is gentle and intelligent, And he is a symbol of wisdom in many cultures.*
- *The penguin is a flightless bird, That lives in the coldest parts of the world. He is playful and social, And he is a symbol of Antarctica.*

*Write an animal poem that is similar to these three poems.*

This prompt gives the LLM three examples of animal poems to work from. The LLM can use these examples to generate a new poem that is similar in style, content, and structure.

**2) Give the Model Time to Think; using “Let’s think step by step”**

LLMs will often rush to an answer. For a range of arithmetic, commonsense, and other reasoning tasks, this can result in incorrect answers.

Chain of Thought (CoT) reasoning if the topic which speaks to constructing prompts in a manner which encourages the model to slow down and decompose reasoning requests into intermediate steps, and in doing so arrive at a correct answer. Simply adding “Let’s think step by step” to the prompt is a common hack to encourages the language model to take on just such behavior.

Here we see Bard trip up on a simple math problem but persevere when adding “let’s think step by step” (Chat GPT-4 had the same issue and also corrected itself by adding having “let’s think step by step” added to the prompt)



**Resources to help with Prompt Engineering**

Here are some additional resources to learn more about Prompt Engineering

- Watch a prompt [Engineering 101]("https://www.youtube.com/watch?v=aOm75o2Z5-o&utm_source=devthink.ai&utm_medium=referral&utm_campaign=focus-on-the-importance-of-prompting-with-llms") - Crash Course & Tips [14min]
- 1 hr [course]("https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/") on Prompt Engineering from Andrew Ng and Isa Fulford. Notebook supplied so you can f[ollow along.](http://along.Microsoft"http://along.Microsoft")
- [Microsoft]("https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions&utm_source=devthink.ai&utm_medium=referral&utm_campaign=focus-on-the-importance-of-prompting-with-llms#prime-the-output") has put together a great guide on Prompt Engineering
- [OpenAI guidance]("https://platform.openai.com/docs/guides/gpt-best-practices/strategy-give-gpts-time-to-think") on giving GPT *time to think*.
- Clear guidance on [authoring effective prompts]("https://docs.anthropic.com/claude/docs/optimizing-your-prompt") for LLMs. Written by Anthropic for Claude, but applicable to similar LLMs such as Bard or ChatGPT

🧰 **Software Dev AI tools and trends**

**Anaconda Assistant Launches Bringing Instant Data Analysis, Code Generation, and Insights to Users**  
[Anaconda]("https://www.anaconda.com/blog/anaconda-assistant-launches-to-bring-instant-data-analysis-code-generation-and-insights-to-users") has announced the alpha release of Anaconda Assistant, an AI-powered tool designed to help data scientists, developers, and researchers excel in their work. It provides a chat-box interface and enhances the Jupyter Notebook coding experience by leveraging AI to instantly accomplish data tasks like generating plots, describing dataframes, generating code snippets, debugging errors, and asking follow-up questions1. I found the code explanation and improvement feature interesting.

**Say hello to Tabnine Chat**  
[Tabnine Chat]("https://www.tabnine.com/blog/say-hello-to-tabnine-chat/") is a code-centric chat application that allows developers to interact with Tabnine’s AI models in a flexible free-form way, using natural language. The chatbot can help developers understand complex code and build applications more easily.

**The Getting Started with AI Stack for JavaScript**  
The a16z infrastructure team has created a [simple “getting started with AI” template]("https://a16z.com/2023/06/21/the-getting-started-with-ai-stack-for-javascript/") for those who want to play around with core technologies, but not have to think too much about ancillary concerns like auth, hosting, and tool selection. The template is based on the JavaScript stack and can be forked and deployed

**Generated Adventure** 🎮 **- A Game Made with chatGPT and Midjourney**  
[Oleg Chumakov gives a detailed writeup]("https://blog.luden.io/generated-adventure-the-postmortem-of-a-game-made-with-chatgpt-and-midjourney-prompts-included-f87e7e615204") how he went about the experiment of building a game using AI for components such as the story, art assets, and audio (prompts included). This was done as part of the Ludum Dare 53 game jam.

**Harness releases generative AI assistant to help increase developer efficiency**  
Harness has announced the release of the [AI Development Assistant (AIDA)]("https://techcrunch.com/2023/06/21/harness-releases-generative-ai-assistant-to-help-ease-developer-workloads/"), a generative AI assistant designed to help increase developer efficiency. AIDA is an extension of the work Harness has been doing over the years, infusing generative AI in every part of the Harness platform. The goal is to improve developer productivity by 30%-50%

📰 **AI news for devs**

**The new creature in IT; AI engineer**  
AI capabilities have advanced so much that many tasks that used to require years of research can now be accomplished in a few hours. This has created a new role for software engineers: [the AI Engineer]("https://www.latent.space/p/ai-engineer"). AI Engineers are responsible for taking AI advancements and shaping them into real products used by millions. They don't need a PhD in AI, but they do need to be skilled in software engineering and have a deep understanding of AI concepts.

**The Third User-Interface Paradigm**  
AI is introducing the [third user-interface paradigm]("https://www.nngroup.com/articles/ai-paradigm/") in computing history, shifting to a new interaction mechanism where users tell the computer what they want, not how to do it — thus reversing the locus of control.

**A Critical Look at AI-Generated Software**  
This article takes a [critical look at AI-generated software]("https://spectrum.ieee.org/ai-software"), such as ChatGPT and GitHub Copilot, and discusses their potential dangers. It also discusses the ongoing AI revolution and its promise to revamp software development, making it far easier for people to program, debug, and maintain code.

🏫 **Read/Listen/Watch: Learn**

**Career Essentials in Generative AI by Microsoft and LinkedIn**  
[5 sessions: ~4hrs total]  
Train on the [foundations of Generative AI]("https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin") and qualify for a Microsoft Professional Certificate

**What “GPT” actually means**  
[10min read]  
[Matt Hartman shares insights]("https://matthewhartman.substack.com/p/what-gpt-actually-means") and analysis on frontier technology, including the building blocks of AI. He explains how understanding the history of AI can help us understand where it is going and what types of use cases we can expect over the next 5-10 years.

**Lex Fridman podcast with George Hotz: Tiny Corp, Twitter, AI Safety, Self-Driving, GPT, AGI & God**  
[watch or listen: ~3hrs]  
[George Hotz]("https://youtu.be/dNrTrx42DGQ") is a programmer, hacker, and the founder of comma-ai and tiny corp

**New course from DeepLearning.ai and AWS**  
[Meant to be 3 weeks: 15 hrs]  
The course “[Generative AI with LLMs]("https://www.deeplearning.ai/courses/generative-ai-with-llms/")” teaches the fundamentals of generative AI and how to deploy it in real-world applications. You’ll learn about the typical LLM-based generative AI lifecycle, transformer architecture, empirical scaling laws, state-of-the-art training, tuning, inference, tools, and deployment methods. This course is built in partnership with AWS (In full disclosure, I work for AWS but not in the AI group)

**Thank you so much for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/devthinkai"), DM me links you would like included in a future newsletters.
