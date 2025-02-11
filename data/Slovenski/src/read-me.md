# Source

The file all-words.txt is taken from  [http://bos.zrc-sazu.si/sbsj.zip](http://bos.zrc-sazu.si/sbsj.zip).

The zip file contains an HTML file. I have removed all the HTML elements, so only words are in each line.

However, there is more than one word in some lines, so this file needs preprocessing.

That is why there is a `processWords.js` file inside this folder to process this source.

## Creating files

To create dictionary files, run a `processWords.js' inside this folder, like:

```bash
node .\processWords.js
```