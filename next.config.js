const nextTranslate = require("next-translate");

module.exports = nextTranslate({});

// removing the nextTranslate wrapper will succesfully start up the dev server,
// without translations ofcourse.

// <!-- uncomment the next line  and comment out line 3 to try it out: --!>
// module.exports = {}
