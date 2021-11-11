//Imagine You have written a story and used single quotations for all dialogs
//now we need to replace them with double-quotes
//But remember to not to change single quote contractions like I'm


//so we need to replace single quotes that start or end with nonalphanumeric character like /\W'|'\W/
//but you are dropping these non word char by replacing
//to prevent that we use parantheses to group so ...

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\W)'|'(\W|$)/g , '$1"$2'));
