import commands from './commands.js';

let input = document.getElementById('input');
let outputContainer = document.getElementsByClassName('output-container')[0];

const prevCmds = [];


input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        
        const inputTxt = String(input.value).trim();
        prevCmds.push(inputTxt);
        
        switch(inputTxt){
            
            case "help":
            
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">help</span>' + 
                                            '<ul>' + commands.map((item)=> {
                                                    return '<li><pre>' + item + '</pre></li>'
                                                }).join("") + 
                                            '</ul>' +
                                            '</div>';
                break;

            case "who":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">who</span>' + 
                                            `<div>
                                            <p>Hello there! I'm Mayank Jha, a passionate and seasoned full-stack web developer with a knack for turning innovative ideas into robust, user-friendly applications. My journey in the world of coding began 4 years ago, and since then, I've been on an exciting adventure of continuous learning and growth.</p>
                                            <p>Talking about my educational qualifications, I did BCA and currently pursuing MCA.</p>
                                            </div>` +
                                            '</div>';
                break;

            case "skills":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">skills</span>' + 
                                            '<div><p class="highlight">Markup Languages/Stylesheets:</p><ul><li>HTML</li><li>CSS</li></ul></div>' +
                                            '<div><p class="highlight">Programming Languages:</p><ul><li>C</li><li>C++</li><li>Java</li><li>Python</li><li>Javascript</li><li>Typescript</li><li>PHP</li></ul></div>' +
                                            '<div><p class="highlight">Frameworks/Libraries:</p><ul><li>Node.js</li><li>ExpressJs</li><li>ReactJs</li><li>Bootstrap</li><li>Tailwind CSS</li><li>Material UI</li></ul></div>' +
                                            '<div><p class="highlight">Databases:</p><ul><li>MongoDB</li><li>MySQL</li><li>Redis</li></ul></div>' +
                                            '<div><p class="highlight">Cloud Services:</p><ul><li>AWS</li></ul></div>' +
                                            '<div><p class="highlight">Others:</p><ul><li>Data structures and algorithms (DSA)</li><li>Version control using Git and Github</li></ul></div>' +
                                            '</div>' +
                                            '</div>';
                break;

            case "projects":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">projects</span>' + 
                                            `<div>
                                            
                                                <div class="project">
                                                    <span class='highlight project-name'>Flavour Found</span>
                                                    <ul>
                                                        <li>Developed a full-stack food ordering website, which facilitates a user to order food online while sitting at home.</li>
                                                        <li>Implemented user account signup and signin feature to facilitate the user with different roles.</li>
                                                        <li>Site admin can assign and take admin permission back from any of the registered user.</li>
                                                        <li>Developed a admin dashboard where we can analyze sales data like most selling food, items sales data for the particular month, food order data like pending and completed orders.</li>
                                                        <li>Admin can also add and delete food items from the dashboard.</li>
                                                        <li>User can add items to cart which are saved at cloud, after which user can proceed with the order, which redirects the user to the payments page.</li>
                                                        <li>Integrated Stripe payment gateway for easy credit/debit card payments. Admins can view all the payment status from the dashboard.</li>
                                                        <li><a href="https://jhamayank02.github.io/FlavourFound/" target="_blank">View Live Site</a></li>
                                                        <li><a href="https://github.com/jhamayank02/FlavourFound" target="_blank">View On Github</a></li>
                                                    </ul>
                                                </div>

                                                <div class="project">
                                                    <span class='highlight project-name'>P2P Meet</span>
                                                    <ul>
                                                        <li>Developed user registeration and login facility to facilitate secure meetings using bcryptjs and jsonwebtoken.</li>
                                                        <li>Implemented new meeting scheduling feature using which user can schedule the meeting, and can share the meeting code with the other participant. User also has ability to delete the future meetings which are postponed.</li>
                                                        <li>A user can join the meeting using the valid meeting code.</li>
                                                        <li>Developed meeting page, where a user can share his/her audio/video and screen. User can enable/disable audio/video and screen sharing. The user can also chat with the other participant in realtime during the meeting.</li>
                                                        <li><a href="https://jhamayank02.github.io/P2P-Meet-Frontend/" target="_blank">View Live Site</a></li>
                                                        <li><a href="https://github.com/jhamayank02/P2P-Meet-Frontend" target="_blank">View On Github</a></li>
                                                    </ul>
                                                </div>

                                                <div class="project">
                                                    <span class='highlight project-name'>ChatInit</span>
                                                    <ul>
                                                        <li>Developed an online chatting website which facilitates realtime messaging using the Websocket API. This website uses Socket.io library to implement Websocket connection.</li>
                                                        <li>Implemented user account creation and login functionality using bcryptjs and jsonwebtoken to provide the user with secure messaging environment. User has to verify his/her account through OTP verification.</li>
                                                        <li>User can send and accept friend requests from other users, accepting friend request will add that user in your contact list.</li>
                                                        <li>A user can see the other person whether he/she is online. A typing indicator is also implemented, which shows if a user on the other side is typing something./li>
                                                        <li>Implemented text, audio, video and file sharing feature on the chat page./li>
                                                        <li><a href="https://github.com/jhamayank02/ChatInit" target="_blank">View On Github</a></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <span class='highlight'>Wait, I have more interesting projects '<a href="https://github.com/jhamayank02/" target="_blank">Github</a>'</span>
                                                </div>
                                            
                                            </div>` +
                                            '</div>';
                break;

            case "education": 
                input.value = "";

                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">education</span>' + 
                                            `<div class="education">
                                                <ul>
                                                    <li>
                                                        <span class="highlight">D.A.V Institute Of Management</span>
                                                        <span>Master of Computer Applications (MCA - 8.6 SGPA)</span>
                                                        <span>Aug 2023 – Jun 2025 (Expected)</span>
                                                    </li>
                                                    <li>
                                                        <span class="highlight">D.A.V Centenary College</span>
                                                        <span>Bachelor of Computer Applications (BCA - 81.56%)</span>
                                                        <span>Nov 2020 – Jun 2023</span>
                                                    </li>
                                                </ul>
                                            </div>` +
                                            '</div>';
                break;

            case "connect":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">connect</span>' + 
                                            `<div>
                                            <ul>
                                                    <li><pre><span class="highlight">Email</span>            <a href="mailto:mjha199402@gmail.com" target="_blank">mjha199402@gmail.com</a></pre></li>
                                                    <li><pre><span class="highlight">Github</span>           <a href="https://github.com/jhamayank02" target="_blank">https://github.com/jhamayank02</a></pre></li>
                                                    <li><pre><span class="highlight">Twitter</span>          <a href="https://github.com/jhamayank02" target="_blank">https://github.com/jhamayank02</a></pre></li>
                                                    <li><pre><span class="highlight">LinkedIn</span>         <a href="https://www.linkedin.com/in/mayank-jha-708b8420b" target="_blank">https://www.linkedin.com/in/mayank-jha-708b8420b</a></pre></li>
                                                    <li><pre><span class="highlight">GeeksForGeeks</span>    <a href="https://auth.geeksforgeeks.org/user/mjha199402/" target="_blank">https://auth.geeksforgeeks.org/user/mjha199402/</a></pre></li>
                                                    <li><pre><span class="highlight">CodingNinjas</span>     <a href="https://www.codingninjas.com/studio/profile/1a187a34-031c-4e91-8233-a3fd97cb281f" target="_blank">https://www.codingninjas.com/studio/profile/1a187a34-031c-4e91-8233-a3fd97cb281f</a></pre></li>
                                                    <li><pre><span class="highlight">Leetcode</span>         <a href="https://leetcode.com/MayankJha2002/" target="_blank">https://leetcode.com/MayankJha2002/</a></pre></li>
                                                </ul>
                                            </div>` +
                                            '</div>';
                break;

            case "experience":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">experience</span>' + 
                                            `<div>
                                                <ul>
                                                    <li><pre><span class="highlight">Maxester</span>           Fullstack Web Developer Intern (Dec 2023 - Jan 2024)</pre></li>
                                                    <li><pre><span class="highlight">Fetching more...</span></pre></li>
                                                </ul>
                                            </div>` +
                                            '</div>';
                break;

            case "clear":
                input.value = "";
                outputContainer.innerHTML = "";

                break;

            case "resume":
                input.value = "";
                
                outputContainer.innerHTML += '<div class="output">' +
                                            '<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">resume</span>' + 
                                            '<div>Redirecting...</div>' +
                                            '</div>';
                window.open('https://drive.google.com/file/d/10GzH9Au_XhfDAZ1HZ7bfh4dhM6nmBNmz/view?usp=sharing', '_blank');
                break;

            default:
                
                outputContainer.innerHTML += '<div class="output">' +
                `<span class="user">visitor@mjcodes:~$</span> <span class="prev-cmd">${input.value}</span>` + 
                '<div>No command found. See the list of available commands using <span class="highlight">\'help\'</span></div>' +
                '</div>';
                input.value = "";
        }

    }

    window.scrollBy(0, 500);
})

// input.addEventListener('keyup', (e)=>{
//     if(e.key === 'ArrowUp'){
//         let i = prevCmds.length - 1;
//         console.log(i, prevCmds);

//         if(i < 0){
//             return;
//         }

//         input.value = prevCmds[i];
//         // console.log("triggerred" + prevCmds + " ------ " + prevCmds)

//         // window.addEventListener('keyup', (e)=>{
//         //     if(e.key !== 'ArrowUp'){
//         //         console.log("window if")
//         //         return;
//         //     }
//         //     else{
//         //         console.log("window else")
//         //         i--;
//         //         if(i < 0){
//         //             return;
//         //         }
//         //         input.value = prevCmds[i];
//         //     }
//         // })
//     }
    
// })