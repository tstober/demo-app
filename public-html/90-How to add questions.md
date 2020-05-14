---
layout: post
title: How to Add Questions
---

### Some background

This Site is made using Jekyll and hosted on Github pages. A static site generator creates web pages from raw text files, such as `markdown`, and as such individual pages are simple markdown files.

###  Where to edit

There are two ways to create new questions and test your edits: Either change files individually on the GitHub interface (the `Edit this Page` button at the top of each page should take you directly to that file on GitHub), or clone the repository and edit the files locally.

Please refer to the [setup instructions]({{ site.url }}/set-up-instructions)


### How to add more Questions to the FaQ

For each **question** you will need to create a new **file** in the Github repository.
In the Github repo, the files are grouped within subdirectories of the directory "_faq". Each subdirectory represents are category (type) of questions. 

> * Each single question for the FaQ is stored as a file in a subfolder of the directory "_faq" with the extension *.md, e.g. "my first question.md".
>
> * The file will represent a dedicated page for your question. 
>
> * Each category (type) of questions has its own subfolder within "_faq", e.g. "01-business-value". The number and the "-" in the type naming will be not be displayed, but be used internally to sort the types in the side navigation tree sequentially.

A page representing a question needs a **layout** associated, which ensures that all questions in the FaQ look nice and consistent. The layout for a question is specified by the following tag at the top of your file:

```
---
layout: question
---
```

There are further **tags**, which make it even easier to describe a question. 

```
---
layout: question
type: 00 Sample Question
title: "Layout for a Q&A topic"
question: "How does the syntax look like?"
answer: "copy this topic as a template!"
reference: "How can I grant root access"
link1: "http://www.ibm.com"
link2: "http://www.redhat.com"
link3: "http://www.ibm.com"
link4: "http://www.ibm.com"
chart: "/assets/charts/sample-chart.jpg"
---
```

> * Specify **layout: question**.
>
> * Specify a **type:** (=category of question). The type should match the name of one of the subdirectories in the folder "_faq". The type will be used to group question in the navigation panel on the left. Please include the the number following by "-" in the type.
>
> * Specify a **title:** of your choice. Make it short and self-explainatory.
>
> * Specify the **question:** you want to address.
>
> * Specify the short **answer:** you want to provide.
>
> * (Optional) Specify a reference to another question, which will answer this question (avoid duplication). The reference needs to be the file name of the referenced page (including any spaces but without the subdirectory path and .md extension).
>
> * (Optional) Specify optional **link1:**, **link2:**, **link3:**, **link4:**, if you have links to share.
>
> * (Optional) Reference an image or a **chart:** if you have links to share. 
>   * Save any images/charts as jpd/png files in the directory: [/assets/charts/](/assets/charts/). 
>   * For convenience you can also store the source powerpoint etc in: /assets/source-files-for-charts (but note: those files will not be used for display on the pages). 
>   * You can also add chart(s) in the free-form content (see next paragraph)


Below the section specifying those tags you can add arbitrary markdown syntax to provide further details to your answers. That **content** will be rendering for you by the layout template as well.
You are free to type whatever content you want into the file. You can add further images, structure longer contributions with sub-headlines, bullets, etc. [Here is a cheatsheet to get you acquianted with Git flavoured Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf). However it is possible to just write plain text and it will still be served on a page.

Once the file is committed on Github, it will represent your question as a unique **page** in the overall Github pages site and will be visible for all in the site navigation.

**As a summary: the concepts used for each provided question are:**

> * **for each question:** 
>
>   * **file** (added in a subdirectory of "_faq" with extension "*.md")
>
>   * **layout** (specify the layout "question:")
>
>   * **tags** (specify the key data for your answers, e.g. type)
>
>   * **content** (describe any additional helpful info in markdown syntax)
>
>   * **page** (will show up in the resulting Github Pages site)

### Adding other pages to the Site

In addition to the questions for the FaQ you can add **further pages** to the site by adding markdown formatted files to the directory structure.


Currently the main navigation has 2 **"collections"** in the main site navigation to add pages: 
* "_faq"  
* and "_general"

The collection "_faq" is furthermore grouping together related pages by *types*.

```
faq3--"_faq"
    |     |--"00 Sample Question"
    |     |--"01 First sub category for questions"
    |     |--"02 Second sub category for questions"
    |     |...
    |
    |--"_general"
```

**Note:** If further collections are needed please refer to the [setup instructions]({{ site.url }}/set-up-instructions)

Once you have created a new page in the collection you want, 
For any additional pages beyond simple questions and answers in the FaQ, the following other layout templates might be useful as well:

* post (a template specifying a very generic page on which you can add markdown syntax)
* ibm.box (a template specifying how to displayed a box note)
* squad (a template specifying how displayed names of people))

The **"Post" layout** allows to specify a title:

```
---
layout: squad
title: The Team
mission: </h2>Make our customers successful<h2>
---
```

In the **"ibm.box" layout** you can specify title plus the embed link pointing to a Ibm.Box resource (Careful: the embed-Link in Box is different from the regular link you share with other. You can obtain that link in the Web UI of Box [How to get the Embed-Link in Box](https://developer.box.com/guides/embed/box-embed/))

```
---
layout: ibm.box
title: Box Information
embed-link: https://ibm.box.com/embed/s/2gwp8y710h6jw09i2ss43zkymt1rky05
---
```
In the **"squad" layout** you the specify a title plus a team mission:
```
---
layout: squad
title: The Team
mission: </h2>Make our customers successful<h2>
---
```
