/*Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:

The UL must have a class items-list
Each of the LIs must:
have a class list-item
content "List item #INDEX"
The indices are zero-based
If the provided selector does not selects anything, do nothing
Throws if
COUNT is a Number, but is less than 1
COUNT is missing, or not convertible to Number
Example:
Valid COUNT values:
1, 2, 3, '1', '4', '1123'
Invalid COUNT values:
'123px' 'John', {}, []*/

function solve() {
    return function(selector, count) {

        if (typeof selector !== 'string') {
            throw new Error('Invalid selector!');
        }

        if (count < 1 || !count || isNaN(count)) {
            throw new Error('Invalid count');
        }

        var $element = $(selector);
        if (!$element) {
            return;
        }

        var $ul = $('<ul />').addClass('item-list');

        for (var i = 0; i < count; i += 1) {
            var $li = $('<li />');
            $li.addClass('list-item')
                .html('List item' + i)
                .appendTo($ul);
        }

        $element.html($ul);
    };
}
