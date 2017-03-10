var numberToString = {
    0:
        " _ \n" +
        "| |\n" +
        "|_|\n" +
        "   ",
    1:
        "   \n" +
        "  |\n" +
        "  |\n" +
        "   ",
    2:
        " _ \n" +
        " _|\n" +
        "|_ \n" +
        "   ",
    3:
        " _ \n" +
        " _|\n" +
        " _|\n" +
        "   ",
    4:
        "   \n" +
        "|_|\n" +
        "  |\n" +
        "   ",
    5:
        " _ \n" +
        "|_ \n" +
        " _|\n" +
        "   ",
    6:
        " _ \n" +
        "|_ \n" +
        "|_|\n" +
        "   ",
    7:
        " _ \n" +
        "  |\n" +
        "  |\n" +
        "   ",
    8:
        " _ \n" +
        "|_|\n" +
        "|_|\n" +
        "   ",
    9:
        " _ \n" +
        "|_|\n" +
        " _|\n" +
        "   "
};

//create reverse object
var stringToNumber = {}

for (var number in numberToString) {
  stringToNumber[numberToString[number]] = number
}



var ocr = {
    split: function(string) {
        var NUMBER_HEIGHT = 4;
        var rows = string.split("\n");
        var concatenated = [];
        for (var i = 0; i < rows.length; i += NUMBER_HEIGHT) { //index = index+
            var concatenatedRow = [];
            concatenatedRow = rows.slice(i, i + NUMBER_HEIGHT);
            concatenated.push(concatenatedRow);
        }
        return concatenated.map(function(con) {
            return this.getStrings(con);
        }, this);
    },
    convertHelper: function(stuff) {
        return 7;
    },
    getStrings: function(rows) {
        var NUMBER_WIDTH = 3;
        var numberStrings = [];
        for (var i = 0; i < rows[0].length; i += NUMBER_WIDTH) {
            var numberChars = rows.map(function(row) {
                return row.substr(i, NUMBER_WIDTH);
            }).join("\n");
            numberStrings.push(numberChars);
        }
        return numberStrings;
    },
    convert: function(string) {
        var splitStrings = this.split(string);
        var number = splitStrings.map(function(thing) {
            return thing.reduce(function(number, string) {
                var theNumber = stringToNumber[string] || "?";
                return number + theNumber;
            }, '');
        }).join(",");
        return number;
    }
};

module.exports = ocr;


//Dude on the Internet's code:
//var numberToString = {
//     0:
//         " _ \n" +
//         "| |\n" +
//         "|_|\n" +
//         "   ",
//     1:
//         "   \n" +
//         "  |\n" +
//         "  |\n" +
//         "   ",
//     2:
//         " _ \n" +
//         " _|\n" +
//         "|_ \n" +
//         "   ",
//     3:
//         " _ \n" +
//         " _|\n" +
//         " _|\n" +
//         "   ",
//     4:
//         "   \n" +
//         "|_|\n" +
//         "  |\n" +
//         "   ",
//     5:
//         " _ \n" +
//         "|_ \n" +
//         " _|\n" +
//         "   ",
//     6:
//         " _ \n" +
//         "|_ \n" +
//         "|_|\n" +
//         "   ",
//     7:
//         " _ \n" +
//         "  |\n" +
//         "  |\n" +
//         "   ",
//     8:
//         " _ \n" +
//         "|_|\n" +
//         "|_|\n" +
//         "   ",
//     9:
//         " _ \n" +
//         "|_|\n" +
//         " _|\n" +
//         "   "
// };
//
// var stringToNumber = Object.keys(numberToString).reduce(function(mappings, number) {
//     var string = numberToString[number];
//     mappings[string] = number;
//     return mappings;
// }, {});
//
//
// var ocr = {
//     split: function(string) {
//         var NUMBER_HEIGHT = 4;
//         var rows = string.split("\n");
//         var concatenated = [];
//         for (var i = 0; i < rows.length; i += NUMBER_HEIGHT) { //index = index+
//             var concatenatedRow = [];
//             concatenatedRow = rows.slice(i, i + NUMBER_HEIGHT);
//             concatenated.push(concatenatedRow);
//         }
//         return concatenated.map(function(con) {
//             return this.getStrings(con);
//         }, this);
//     },
//     convertHelper: function(stuff) {
//         return 7;
//     },
//     getStrings: function(rows) {
//         var NUMBER_WIDTH = 3;
//         var numberStrings = [];
//         for (var i = 0; i < rows[0].length; i += NUMBER_WIDTH) {
//             var numberChars = rows.map(function(row) {
//                 return row.substr(i, NUMBER_WIDTH);
//             }).join("\n");
//             numberStrings.push(numberChars);
//         }
//         return numberStrings;
//     },
//     convert: function(string) {
//         var splitStrings = this.split(string);
//         var number = splitStrings.map(function(thing) {
//             return thing.reduce(function(number, string) {
//                 var theNumber = stringToNumber[string] || "?";
//                 return number + theNumber;
//             }, '');
//         }).join(",");
//         return number;
//     }
// };
//
// module.exports = ocr;
