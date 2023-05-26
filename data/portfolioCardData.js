import Image from 'next/image';
import Link from 'next/link';

const portfolioCardData = [
  {
    id: 1,
    title: 'Battle Game',
    video: '/web1-video.mp4',
    description: 'Classic game of street fighter.',
    description_detail: " This game is a 2D imitation fighting game implemented using JavaScript. It utilizes JavaScript for game logic, animation effects, and user input handling. The HTML <canvas> element and JavaScript's drawing API are employed to create the game visuals, including backgrounds, characters, and items. Player interactions are facilitated through event listeners for keyboard and mouse events. Furthermore, random backgrounds and sound effects are incorporated to enhance the overall game-play experience.",
    image: "/web1.png",
    link: '/portfolio/web1',
    code: 'https://github.com/heartbreathing/Hyper-Battle-final-/tree/master',
    live: "https://master--monumental-malasada-14fcf9.netlify.app/"
  },
  {
    id: 2,
    title: 'FAIR & SQUARE',
    video: '/web2-video.mp4',
    description: 'A query website',
    description_detail: " This is a third-party survey website.  The project execution adopts the agile sprint development mode, and the code version is controlled through GitHub. Use Figma for page and workflow design. The web page uses the next.js framework and bootstrap to edit the style, and the internal page routing uses react-router-dom.",
    image: "/web2.png",
    link: '/portfolio/web2',
    code: 'https://github.com/fair-square-fed/employee',
    live: "https://employee-hqat-43zy63n3b-fair-and-square.vercel.app/"
  },
  {
    id: 3,
    title: 'A FULLSTACK TODO APP',
    video: '/web3-video.mp4',
    description: 'With express & postgreSQl',
    description_detail: " This is a simple Todo list application with a React front-end and a Node.js back-end. The front-end is built with React and Bootstrap. The back-end uses the Express web framework, and the PostgreSQL database is managed by the Sequelize ORM. The code has been pushed to the github repository for version control.The application utilizes REST API logic to handle HTTP requests between the frontend and backend. The frontend sends HTTP requests to the server, which responds with JSON data. The server then updates the database and sends back a response to the frontend. ",
    image: "/web3.png",
    link: '/portfolio/web3',
    code: 'https://github.com/heartbreathing/restAPIDB1.0',
    live: 'https://react-todo-db.netlify.app'
  },
  // add more projects here
];

export default portfolioCardData;