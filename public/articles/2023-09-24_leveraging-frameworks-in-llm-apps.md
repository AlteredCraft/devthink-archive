---
title: "Leveraging frameworks in LLM apps"
author: Sam Keen
date: September 24, 2023
url: https://samkeen.dev/leveraging-frameworks-in-llm-apps
---

![Leveraging frameworks in LLM apps](/images/samkeen-dev/leveraging-frameworks-in-llm-apps-0.jpeg)

# Leveraging frameworks in LLM apps

*By Sam Keen on September 24, 2023*

---

Weve all seen these posts:

***Build a ChatGPT clone in 10 lines of Python code!!!***

What could be easier?

True, if you examine the code file, it contains 10 lines, but one or two of these lines are imports of frameworks (e.g., LangChain, LlamaIndex, ).

Behind those imports are additional lines of Python code being incorporated into your application.

For instance, importing LlamaIndex adds a Python library to your concise 10-liner, ballooning it with an additional **1 million lines of Python!**

![](/images/samkeen-dev/leveraging-frameworks-in-llm-apps-0.jpeg)

*\*a virtual python env with only llama-index installed  
note: ~166K is python builtins (logging, etc), but that still leaves >1M lines attributed to Llama-index\*

> So the more accurate post might be:  
> ***Build a ChatGPT clone in 1,000,010 lines of Python code!!!***  
> but that probably would not get the same click-through

You might say, So what? I just write the import statement and dont worry about the code it brings in behind the scenes. This is a valid perspective, especially for a 10-line app. However, when you delve into building more intricate applications that span far beyond 10 lines of code, the more you need to achieve in your app, the more potential friction can arise from those added dependencies.

This isnt a piece meant to criticize frameworks. Instead, I aim to provide clarity regarding the trade-offs of using them. Read to the end for a concise checklist to guide your framework evaluation.

Frameworks are borne out of immense effort by their creators to address common problems in a way thats general enough for a broad spectrum of developers to repurpose. Nevertheless, they can only be generalized up to a point. As a result, they often carry inherent opinions about how particular tasks should be done. Sometimes, this aligns seamlessly with the developers approach, but other times it may not.

Frequently, frameworks can expedite about 80% of your app development process. However, the disparity between your envisioned structure and the frameworks design can make the remaining 20% quite challenging. You might find yourself either conforming to the frameworks constraints or introducing added complexities and workarounds to realize your vision. Its not always a grim scenario, though. Occasionally, these mismatches are minor and inconsequential. And thanks to open source, you have the option to submit patches, propose new features, or, in more extreme cases, fork the framework to tailor it to your specific requirements.

My advice? If youre initiating a new app project in an area where you lack extensive experience (and for many in the GenAI community, this rings true), start by creating a proof of concept (POC) with minimal dependencies. For instance, opt for the OpenAI SDK directly rather than jumping straight to a framework like LangChain. While keeping the scope limited, strive to create something substantiallike a narrow, vertical slice of functionality that taps into every layer of your apps tech stack. This allows you to engage with every aspect of the technology youre utilizing.

Armed with this hands-on experience, when the time comes to assess a framework, youll possess a deeper understanding of the benefits and compromises entailed in building with one.

## **Framework review punch-list**

Dont be overly put off or influenced by unbalanced opinion pieces about a given framework on the web. A framework of any appreciable popularity will have its population of detractors and enthusiasts with their rants.

Use these tips to review frameworks a bit more scientifically:

1. **Prefer open-source frameworks.**

   * Open-source is far more transparent and available for review. With closed systems, you are mostly left with what the marketing department tells you.
   * You will always have the option to contribute a fix or fork.
2. **Choose the right balance.**  
    In vibrant ecosystems such as GenAI, frameworks are always available on a spectrum. Choose the balance of build vs. borrow (from a framework) that works best for you.

   * Lama-index: ~1M lines of Python
   * LangChains: ~460K lines of Python (note, Llama-index includes LangChain as a dependency)
   * OpenAI SDK: ~42K lines of Python
3. **Avoid unnecessary features.**  
    Beware of being drawn to a framework by the plethora of extra features you could use in the future. Chances are you wont need that extra functionality, and it will only add bloat and complexity. This is known as YAGNI (You Arent Gonna Need It).
4. **Check the health of the framework project/community.**  
    Be pragmatic about your assessment of a given framework and, just as importantly, the community that supports it.

   * Is there real-time support (e.g., Discord, Slack)? Are questions being answered or ignored?
   * **Frequency of commits:** Beware of dump and run projects; ones where you see initial commits and not much afterward. Ideally, there should be a steady stream of commits, with no more than about 30 days between them as a general guideline.
   * **Number of contributors:** Is it just one person, a few, or many? Although there are some amazing solo contributor frameworks out there, theres an inherent risk in leveraging those products. Interests change, and contributions to those frameworks can halt quickly. If you decide to use them, ensure youre comfortable continuing development if the primary contributor moves on.

---

Join my weekly newsletter for a curated listing of GenAI topic relevant to application developers like you.