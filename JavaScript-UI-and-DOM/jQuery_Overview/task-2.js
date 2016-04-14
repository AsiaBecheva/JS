/*Create a function that takes a selector and:

Finds all elements with class button or content within the provided element
Change the content of all .button elements with "hide"
When a .button is clicked:
Find the topmost .content element, that is before another .button and:
If the .content is visible:
Hide the .content
Change the content of the .button to "show"
If the .content is hidden:
Show the .content
Change the content of the .button to "hide"
If there isn't a .content element after the clicked .button and before other .button, do nothing
Throws if:
The provided ID is not a jQuery object or a string
Use jQuery!*/


function solve() {
    return function(selector) {

        if (typeof selector !== 'string') {
            throw new Error('Invalid selector');
        }

        var $elements = $(selector);
        if (!$elements.length) {
            throw new Error('Invalid input');
        }

        var $allButtons = $elements.find('.button');
        var $content = $elements.find('.content');

        allButtons.click(function() {
            $this = $(this);
            this.text('hide');
            if ($elements.prev('.content')) {
                $this.text('hide');
            } else {
                $this.text('show');
                $content.hide();
            }
            $elements.toggleClass('.content');
        });
    };
}
