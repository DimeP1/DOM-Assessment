const main = document.querySelector('main');

const jokeOne = ('A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."');

const jokeTwo = ('An elderly couple are in church. The wife leans over and whispers to her husband, "I just let out a long, silent fart. What should I do?" The husband replies, "First off, replace the batteries in your hearing aid!"');

const jokeThree = ('On Thanksgiving day, a little boy overhears his mom and dad fighting. He hears his mom call his dad a bastard and hears his dad call his mom a bitch. He asks, "Mommy, what does bastard mean?" She answers, "Um, it means boy." Then he asks, "Daddy, what does bitch mean?" He says, "Uh, it means girl." Later that day, the boy sees his father in the bathroom shaving; the dad accidentally cuts himself and says, "Sh*t." The son asks, "What does that mean?" The dad says, "It means shaving cream." Then he sees his mom in the kitchen carving the turkey; she accidentally cuts herself and says, "F*ck." The son asks her what that word means and she says, "It means carving." That evening, the familys guests arrive for Thanksgiving dinner. The son opens the door to welcome them and says, "Welcome bitches and bastards! My dad is in the bathroom rubbing sh*t on his face and my mom is in the kitchen f*cking the turkey."');


const template = `
    <section>
        <h1>My Jokes</h1>
        <ul> ${jokeOne}</ul>
        <ul> ${jokeTwo}</ul>
        <ul> ${jokeThree}</ul>
`;

main.innerHTML = template;

const body = document.querySelector('body');
const p = document.createElement('p');

p.textContent = "That's all folks!";

body.appendChild(p);