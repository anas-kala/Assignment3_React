class Message {
    public subject: string;
    public body: string;
    public read: boolean;
    constructor(subject: string, body: string) {
        this.subject = subject;
        this.body = body;
        this.read = false;
    }
    MarkAsRead() {
        this.read = true;
    }
}

class Messages {
    public messages: Array<Message>;
    constructor() {
        this.messages = new Array<Message>();
    }
    AddToList(msg: Message) {
        this.messages.push(msg);
    }
    GetNumberOfMessages() {
        return this.messages.length;
    }
}

const form = document.getElementById("form") as HTMLFormElement;
const button: HTMLElement = document.getElementById("button") as HTMLButtonElement;
const msgs = new Messages();


form.addEventListener('submit', function (event) {
    const formData = new FormData(form);
    console.log('Form Submitted');
    console.log(`first name: ${formData.get('subject')}\nlastName: ${formData.get('body')}`);
    var msgSubject = formData.get('subject') as string;
    var msgBody = formData.get('body') as string;
    var newMsg = new Message(msgSubject, msgBody);
    msgs.AddToList(newMsg);
    (document.getElementById('form') as HTMLFormElement).style.display = 'none';
    showList();
    (document.getElementById('allMessages') as HTMLFormElement).style.display = "block";
    event.preventDefault();
    form.reset();
    (document.getElementById('form') as HTMLFormElement).reset()
});

function showList() {
    var subjectNode = document.createElement("h2");
    subjectNode.style.color = "red";
    var subjectText = document.createTextNode(msgs.messages[msgs.messages.length - 1].subject);
    subjectNode.appendChild(subjectText);
    var bodyNode = document.createElement("p");
    var bodyText = document.createTextNode(msgs.messages[msgs.messages.length - 1].body);
    bodyNode.appendChild(bodyText);
    var divContainer=document.createElement('div');
    divContainer.appendChild(subjectNode);
    divContainer.appendChild(bodyText);
    var lineNode = document.createElement('hr');
    divContainer.appendChild(lineNode);
    document.getElementById('allMessages').appendChild(divContainer);
    if(msgs.messages[msgs.messages.length-1].read==false){
        divContainer.style.backgroundColor='green';
    }

}

function showMessages() {
    document.getElementById('allMessages').style.display = 'block';
    document.getElementById('form').style.display = 'none';
    showList();
}

function addNewMessage() {
    document.getElementById('allMessages').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}

