
import './Blog.css'


function Blog() {
  return (
      

    <div className="blog-main-heading">
        <div className="blog-title">
        <h1 >React Blog </h1>
        <h1>JavaScript Blog</h1>
        <h1>Python Blog</h1>
        <h1>Django Blog</h1>
        </div>

        <div className="blog-right-side">

        
       
        <h1 className="heading-1">Web Development in React: Functional Component: Introduction, HelloWorld and JSX</h1>
          
        <p>

        React is the most famous library in JavaScript and its demand growing pretty rapidly in the last few years.
        </p>
        <h1 className="heading-2">Environment Setup</h1>
        We will be using the VS studio code editor and MAC operating system. If you are using any other operating system, for the most part, you won’t face any difference. The only difference is installing some of the packages, so just go to the respective documentation and you should be good.
      <h1 className="heading-3">Tools</h1>
      <ul>
        <li>NPM</li>
        <li>Node.js</li>
        <li>Web Browser</li>
        <li>React-developer tool</li>
        <li>VS code text editor</li>
      </ul>

      <h1 className="heading-2">HelloWorld</h1>   
          <p>After installing node and npm, we are ready to write our first code.</p>
      <h1 className="heading-3">step 1:</h1>
        <p>go to the folder of your preference and type the following command</p>

        <code>$ create-react-app hello-world
$ cd hello-world</code>


    <p>Open this project in VS Code. You will have the following structure 
      under hello-world directory</p>

     <p>in the src folder, we have these files. We have index.js, under this file we are rendering App.js
We will see later on what and how these files work. For now, we are going to remove everything in our src folder and start from the beginning.
You can either select and delete these files or just run this command
</p> 
<code>$ rm -rf src/*
$ touch src/index.js</code>

<h1 className="heading-2">step 2:</h1>
<p>add the following code in src/index.js file</p>

<code>
  {/* import React from 'react';
  import ReactDOM from 'react-dom';

    function HelloWorld(){
      return (
    <div>
      Hello World of React!!
    </div>
  );
  <span>}</span>

  ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
) */}

</code>

<h1 className="heading-2">JSX</h1>
<p>

If you never saw this kind of code before, this is JSX. 
We declared a function HelloWorld as any JS function.
 We have a return function inside and it has div tag in it. 
   This bizarre combination of JS and HTML, which made React so interesting and comparatively 
   easier to use. Just like HTML tags, we can use this function and use it like a custom tag ( a custom function in React’s case ). We can’t use the script tag like ES5.
</p>

<h1 className="heading-3">Explanation of code</h1>
<p>
<p>line 1,2: we are importing React and ReactDOM</p>
<p>line 4: we declared a function, which is a JSX and it simply returns a statement ‘ Hello World from React!!’</p>
<p>line 12: We are rendering this function inside the #root tag present in index.html file, shown below.</p>
</p>
      
<p>Now, it is clearing to you how these tags work and with the help of plain JS, we can just render our functional components in HTML. So cool!!!
to run, just type the following command</p>
<code>npm start</code>
      
      
      

        






        {/* if we click on each h1 tag, it should
        open its own tab.
        
        Maybe we should create some components, and then 
        apply if(click == 'React Blog') it should show React blog
        */}






        
</div>
    </div>
  


);
}

export default Blog;
