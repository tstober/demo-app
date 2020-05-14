---
layout: post
title: Setup instructions
---

### Install a local environment
This Playbook is made using Jekyll and hosted on Github pages. 
[Jekyll](https://jekyllrb.com/) is a static site generator which creates web pages from raw text files, such as `markdown`, and as such individual pages are simple markdown files.

There are two ways to develop this site. Either change files individually on the GitHub interface (the `Edit this Page` button at the top of each page should take you directly to that file on GitHub), or clone the repository and edit the files locally.

To run the site locally, you will need `ruby` (version 2.5.x!) and `git` to be installed. 
Have a look here [Jekyll Installation](https://jekyllrb.com/docs/installation/)
You should then be able to run the following commands:
```
git clone git@github.ibm.com:ZaaS/ZaaS.github.ibm.com.git
cd ZaaS.github.ibm.com
gem install jekyll bundler
bundle install
bundle exec jekyll serve
```

If you have not uploaded your public SSH key to github.ibm.com, then use the following clone command instead, which will prompt for your credentials at github.ibm.com:
```
git clone https://github.ibm.com/ZaaS/ZaaS.github.ibm.com.git
```

This will clone the repository locally, install the `Jekyll` and `Bundler` ruby gems, install the site specific gems, and then run Jekyll which provides the web pages on local web server at `localhost:4000` with your local changes.
Jekyll will immediately update the web pages when changes are made in the work directory of your repository clone. From this point make any changes you want, and follow normal git procedure to commit the changes back to the repository.



### Understanding Layouts
Every page you visit should have an underlying `markdown` file accompanying it. Generally the content of that file is mostly plain text, with some styling elements (refer to the GFM cheatsheet to see what styling elements exist), and the layout of that file is specified by a corresponding layout file.
A layout file for a page is specified by the following content at the top of a file:

```
---
layout: ...
---
```

Where the value of the layout has to match a path to a html file under `_layouts/`. For instance, this page uses

```
layout: question
```

Which uses the `_layouts/question.html` layout file. 

Consider the layout as a kind of template, which arranges the information to be shown on the page nicely. Once you have specified a layout, the contents of your file is placed into the `{{ contents }}` tag inside the layout file.
Furthermore, each layout can provide a set of tags, which a page can specify. The layout will arrange and display those tags during the page rendering.
 **Note** that layout files can also have a layout tag, meaning you can have a nest of layouts.

The key layouts provided for usage on this github pages sites are:
*question (a template specifying how questions for this FaQ are being displayed)
*post (a template specifying a very generic page on which you can add markdown syntax)
*ibm.box (a template specifying how to displayed a box note)
*squad (a template specifying how displayed names of people))

As mentioned before, the styling for a page comes from the `layout` specified at the top of the file. If you want to make changes to this layout then edit the underlying layout file and your changes should be reflected all pages using that layout.
**Note** that layouts are probably going to be used by more that one page, so it makes more sense to create a new layout file with the changes you want so you don't edit other peoples posts.

### Understanding Includes
Another Jekyll concept is `includes`. This is the opposite of a layout where you can include some html on the current page. Each include must be backed up by a html file in the `_includes` directory, so for example:

```liquid
{% raw %}
{% include footer.html %}
{% endraw %}
```

Inside your `markdown` file would include the `_includes/footer.html` page at that location.

### Understanding the Side Navigation
The Side nav is build by looping through all the *collections* in the site, and then all the pages in each collection.
A collection is defined by creating a directory starting with an underscore (`_`) in the root of the project. For instance, we have the `_general` collection. There are some reserved names you can't use for a collection (e.g., layouts and includes) but most names are available.
A collection also needs an entry in the `_config.yml` file in the root of the directory. For example, the `_general` collection is defined by:
```yaml
collections:
  general:
    output: true
    permalink: /:collection/:title
    icon: /assets/lib/glyphs/tools/tools_24.svg
```
Everything under the `collections` entry is created as a collection. The name `general` must match the name of the directory we created, minus the underscore, `output: true` tells Jekyll to render the pages, `permalink` tells Jekyll where to display the rendered pages and `icon` is the small icon displayed next to the collection name in the side nav.


- To **add** a new collection, make a new directory starting with an underscore, add a new `collections` entry (you can copy most of this from existing entries) in `_config.yml` and you should see your title rendered in the sidebar.
- To **delete** a collection, remove the collection directory, and it's entry in the `collections` section of `_config.yml`. If it worked your collection should no longer appear in the side nav.

<br />

The collections in the side nav will display all of their posts:

- To **add** a post to a collection, simply create a new `markdown` file within the collection directory. The file has to contain at least the content:
    ```
    ---
    ---
    ```
    Which tells Jekll to render the page. If you were successful you should see your new post being displayed in the side nav.
- To **delete** a post in a collection, just delete the `markdown` file you don't want to display. The file should no longer appear in the side nav.

### careful: Special handling for the collection "Faq"
A special handling is done for the collection named **Faq**: Here the entries in the side navigation are not only displayed in a flat list, but are grouped by "types". Each entry can specify its type.


