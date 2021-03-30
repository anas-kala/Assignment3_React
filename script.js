var Message = /** @class */ (function () {
    function Message(subject, body) {
        this.subject = subject;
        this.body = body;
        this.read = false;
    }
    Message.prototype.MarkAsRead = function () {
        this.read = true;
    };
    return Message;
}());
var Messages = /** @class */ (function () {
    function Messages() {
        this.messages = new Array();
    }
    Messages.prototype.AddToList = function (msg) {
        this.messages.push(msg);
    };
    Messages.prototype.GetNumberOfMessages = function () {
        return this.messages.length;
    };
    return Messages;
}());
var form = document.getElementById("form");
var button = document.getElementById("button");
var msgs = new Messages();
form.addEventListener('submit', function (event) {
    var formData = new FormData(form);
    console.log('Form Submitted');
    console.log("first name: " + formData.get('subject') + "\nlastName: " + formData.get('body'));
    event.preventDefault();
    form.reset();
    document.getElementById('form').reset();
});
