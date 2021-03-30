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
const msgs=new Messages();


form.addEventListener('submit', function (event) {
    const formData = new FormData(form);
    console.log('Form Submitted');
    console.log(`first name: ${formData.get('subject')}\nlastName: ${formData.get('body')}`);
    event.preventDefault();
    form.reset();
    (document.getElementById('form') as HTMLFormElement).reset()
});

